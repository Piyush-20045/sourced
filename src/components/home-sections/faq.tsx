import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "Can I use one account as a freelancer, client, and agency owner?",
    answer:
      "Yes. TalentBridge is built around one account with multiple professional identities. You can create a Freelancer Profile, Client Profile, or multiple Agency Profiles and switch between them whenever you need.",
  },
  {
    question: "How does the project marketplace work?",
    answer:
      "Clients can create projects with their requirements, budget, skills, and timeline. Freelancers and agencies can discover projects, submit proposals, and compete for the work. The client then reviews the proposals and selects the best fit.",
  },
  {
    question: "Can freelancers and agencies both bid on projects?",
    answer:
      "Yes. Both individual freelancers and agencies can discover projects and submit bids with their proposed price, delivery time, cover letter, technical proposal, and relevant experience.",
  },
  {
    question: "How do agencies hire freelancers?",
    answer:
      "Agencies can post jobs with requirements such as skills, salary, experience, and employment type. Freelancers can apply with their resume, portfolio, and cover letter. Agencies can then review applications, conduct interviews, and hire candidates.",
  },
  {
    question: "What can I include in my freelancer profile?",
    answer:
      "Freelancers can build a professional profile with personal information, skills, experience, hourly rate, portfolio, languages, education, certifications, and availability. A completed profile can then become searchable on the marketplace.",
  },
  {
    question: "How does payment work after completing a project?",
    answer:
      "For projects, the client funds the project and the payment is held in escrow. Once the work is completed and approved by the client, the payment is released to the freelancer's wallet, where it can be withdrawn.",
  },
];

function Faq() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[#022B3A]">
            GOOD TO KNOW
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">FAQs</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Everything you need to know about finding trusted talent and getting
            your next project moving.
          </p>
        </div>
        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="py-5 text-sm font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
export default Faq;
