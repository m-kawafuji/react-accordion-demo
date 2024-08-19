'use client';

import clsx from 'clsx';
import { createContext, useContext, useId, useState } from 'react';
import styles from './index.module.scss';

type AccordionContextType = {
  id: string;
  isExpanded: boolean;
  toggle: () => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      'Cannot call `useAccordion` outside the <AccordionContext.Provider>',
    );
  }

  return context;
}

export function Accordion({
  children,
}: {
  children: [
    React.ReactElement<AccordionHeaderProps>,
    React.ReactElement<AccordionPanelProps>,
  ];
}) {
  const id = useId();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <AccordionContext.Provider
      value={{ id, isExpanded, toggle: () => setIsExpanded(!isExpanded) }}
    >
      <section className={styles.container}>{children}</section>
    </AccordionContext.Provider>
  );
}

type AccordionHeaderProps = {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function AccordionHeader({
  children,
  level: Heading = 'h2',
}: AccordionHeaderProps) {
  const { id, isExpanded, toggle } = useAccordion();

  return (
    <Heading>
      <button
        className={styles.trigger}
        id={id + 'trigger'}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={id + 'panel'}
        onClick={toggle}
      >
        {children}
      </button>
    </Heading>
  );
}

type AccordionPanelProps = {
  children: React.ReactNode;
};

export function AccordionPanel({ children }: AccordionPanelProps) {
  const { id, isExpanded } = useAccordion();

  return (
    <div
      className={clsx(styles.panelWrapper, isExpanded && styles.isExpanded)}
      id={id + 'panel'}
      role="region"
      aria-labelledby={id + 'trigger'}
    >
      <div className={styles.panelInner}>{children}</div>
    </div>
  );
}
