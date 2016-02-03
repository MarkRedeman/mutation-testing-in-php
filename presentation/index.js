import React from "react";
import { Deck, Spectacle } from "spectacle";
import slidify from "../src/slidify.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import theme from "./theme";

// Presentation contents
import * as Introduction from "./introduction";
import * as Mutation from "./mutation";
import * as Humbug from "./humbug";
import * as Workflow from "./workflow";
import * as Conclusion from "./conclusion";

export default () => {
  return (
      <Spectacle theme={theme}>
          <Deck transition={["slide"]} transitionDuration={500}>
              {slidify(Introduction.Title)}
              {slidify(Introduction.AboutMe)}
              {slidify(Introduction.TableOfContents)}
              {/*
              Mutations
              */}
              {slidify(Mutation.Introduction)}
              {slidify(Mutation.Example)}
              {slidify(Mutation.Example2)}
              {slidify(Mutation.Definitions)}
              {slidify(Mutation.Mutation)}
              {slidify(Mutation.KilledMutant)}
              {slidify(Mutation.EscapedMutant)}
              {slidify(Mutation.EquivalentMutant)}
              {slidify(Mutation.Mutators)}
              {slidify(Mutation.MathMutators)}
              {slidify(Mutation.ConditionalMutators)}
              {slidify(Mutation.EtcMutators)}
              {slidify(Mutation.Metrics)}
              {slidify(Mutation.MetricsExample)}
              {/*
              Humbug
              */}
              {slidify(Humbug.Introduction)}
              {slidify(Humbug.Installation)}
              {slidify(Humbug.Configuration)}
              {slidify(Humbug.Running)}
              {slidify(Humbug.Analyzing)}
              {slidify(Humbug.AnalyzingJson)}
              {slidify(Humbug.Options)}
              {slidify(Humbug.Mutators)}
              {slidify(Humbug.Results)}
              {/*
              Workflow | Conclusion
              */}
              {slidify(Workflow.Diagram)}
              {slidify(Conclusion.Book)}
              {slidify(Conclusion.OtherLanguages)}
              {slidify(Conclusion.Remarks)}
              {slidify(Conclusion.Thomas)}
              {slidify(Conclusion.End)}
          </Deck>
      </Spectacle>
  );
}
