import React from "react";
import { Deck, Spectacle } from "spectacle";
import slidify from "../src/slidify.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/prism.css");
require("../assets/prism.js");

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
          <Deck transition={["slide"]} transitionDuration={350}>
              {slidify(Introduction.Title)}
              {slidify(Introduction.AboutMe)}
              {slidify(Introduction.GroningenPHP)}
              {slidify(Introduction.TableOfContents)}
              {slidify(Introduction.Testing)}
              {slidify(Introduction.CodeCoverage)}
              {slidify(Introduction.CodeCoverageNotEnough)}
              {slidify(Introduction.CodeCoverageBoundaryExample)}
              {slidify(Introduction.CodeCoverageCommandLogger)}
              {slidify(Introduction.MutationTestingSolvesTheseProblems)}
              {/*
              Mutations
              */}
              {slidify(Mutation.Introduction)}
              {slidify(Mutation.Example)}
              {slidify(Mutation.Example2)}
              {slidify(Mutation.MutationTesting)}
              {slidify(Mutation.Mutation)}

              {/*
              Mutation operators
              */}
              {slidify(Mutation.GenerateMutants)}
              {slidify(Mutation.MutationOperator)}
              {slidify(Mutation.BinaryArithmetic)}
              {slidify(Mutation.BooleanSubstitution)}
              {slidify(Mutation.ConditionalBoundaries)}
              {slidify(Mutation.ReturnValues)}
              {slidify(Mutation.EtcMutations)}
              {slidify(Mutation.Recap)}
              {slidify(Mutation.ImplementingOperator)}

              {slidify(Mutation.TestSelection)}


              {/*
              Humbug
              */}
              {slidify(Mutation.Metrics)}
              {slidify(Mutation.MetricsExample)}

              {slidify(Humbug.Introduction)}
              {slidify(Humbug.Demo)}
              {slidify(Humbug.Installation)}
              {slidify(Humbug.Configuration)}
              {slidify(Humbug.Options)}
              {slidify(Humbug.AnalyzeResults)}
              {slidify(Humbug.Analyzing)}
              {slidify(Humbug.AnalyzingJson)}
              {slidify(Humbug.Results)}

              {slidify(Humbug.PossibleImprovements)}
              {slidify(Humbug.PotentialMutators)}
              {/*
              Workflow | Conclusion
              */}
              {slidify(Workflow.Diagram)}
              {slidify(Workflow.CodeReview)}

              {slidify(Conclusion.Book)}
              {slidify(Conclusion.OtherLanguages)}
              {slidify(Conclusion.Remarks)}
              {slidify(Conclusion.Thanks)}
              {slidify(Conclusion.Thomas)}
              {slidify(Conclusion.End)}
          </Deck>
      </Spectacle>
  );
}
