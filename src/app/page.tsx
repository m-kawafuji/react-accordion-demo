import {
  Accordion,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordion';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <section className={styles.inner}>
          <h1 className={styles.title}>React Accordion Demo</h1>

          <div className={styles.accordions}>
            <Accordion>
              <AccordionHeader>Accordion 1</AccordionHeader>
              <AccordionPanel>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
              </AccordionPanel>
            </Accordion>

            <Accordion>
              <AccordionHeader>Accordion 2</AccordionHeader>
              <AccordionPanel>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
              </AccordionPanel>
            </Accordion>

            <Accordion>
              <AccordionHeader>Accordion 3</AccordionHeader>
              <AccordionPanel>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
              </AccordionPanel>
            </Accordion>

            <Accordion>
              <AccordionHeader>Accordion 4</AccordionHeader>
              <AccordionPanel>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto similique accusantium blanditiis ratione obcaecati
                  quae, laboriosam culpa praesentium minima aliquam cumque earum
                  fugiat porro maxime! Illo inventore earum obcaecati deserunt?
                </p>
              </AccordionPanel>
            </Accordion>
          </div>
        </section>
      </div>
    </main>
  );
}
