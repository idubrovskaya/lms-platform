import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <section className="home-section">
        <CompanionCard
          id={"1"}
          subject={"Science"}
          name={"Neura the Brainy Explorer"}
          topic={"Topic: Neural Network of the Brain"}
          duration={45}
          color={"#E5D0FF"}
        />
        <CompanionCard
          id={"2"}
          subject={"Maths"}
          name={"Countsy the Number Wizard"}
          topic={"Topic: Derivatives & Integrals"}
          duration={30}
          color={"#FFDA6E"}
        />
        <CompanionCard
          id={"3"}
          subject={"Language"}
          name={"Verba the Vocabulary Builder"}
          topic={"Topic: English Literature "}
          duration={30}
          color={"#BDE7FF"}
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title={""}
          companions={recentSessions}
          classNames={"w-2/3 max-lg:w-full"}
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
