
export interface Term {
  slug: string;
  title: string;
  type: string;
  definition: string;
  usage: string;
  related: string[];
  sectionId: string;
  actionStep?: string;
  takeaway?: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  terms: Term[];
}

export const MANUSCRIPT: Section[] = [
  {
    id: "body",
    title: "Body / Dimorphism / Physical Signal",
    subtitle: "Section I",
    description: "The physical self as the primary interface of status and optimization.",
    terms: [
      {
        slug: "looksmaxxing",
        title: "Looksmaxxing",
        type: "noun, verb",
        definition: "Deliberately optimizing physical appearance to increase attractiveness or perceived leverage. It treats grooming, physique, posture, and presentation as controllable inputs.",
        usage: "After the breakup, he committed to looksmaxxing and the difference was visible within months.",
        related: ["Groomingmaxxing", "Dimorphismaxxing", "Surgerymaxxing"],
        sectionId: "body",
        takeaway: "Looksmaxxing is the realization that your physical presence is a variable, not a constant.",
        actionStep: "Audit your current grooming and posture. Identify one high-leverage change (e.g., skin care or a better haircut) and implement it immediately."
      },
      {
        slug: "gymmaxxing",
        title: "Gymmaxxing",
        type: "verb",
        definition: "Using structured physical training to improve strength, appearance, and discipline. It reframes the body as visible proof of consistency.",
        usage: "She started gymmaxxing before work and her entire schedule reorganized around it.",
        related: ["Proteinmaxxing", "Bodyfatmaxxing", "Disciplinemaxxing"],
        sectionId: "body"
      },
      {
        slug: "healthmaxxing",
        title: "Healthmaxxing",
        type: "verb",
        definition: "Prioritizing long-term physical wellbeing over short-term gratification. Emphasizes sustainability and preventative habits.",
        usage: "He reduced alcohol and processed food because he’s healthmaxxing this year.",
        related: ["Sleepmaxxing", "Nutritionmaxxing", "Recoverymaxxing"],
        sectionId: "body"
      },
      {
        slug: "sleepmaxxing",
        title: "Sleepmaxxing",
        type: "verb",
        definition: "Treating sleep as a performance multiplier rather than optional rest. Views recovery as strategic advantage.",
        usage: "She left the event early without explanation because she’s sleepmaxxing during the week.",
        related: ["Recoverymaxxing", "Energymaxxing"],
        sectionId: "body"
      },
      {
        slug: "recoverymaxxing",
        title: "Recoverymaxxing",
        type: "verb",
        definition: "Structuring rest, mobility, and stress reduction to sustain output. Integrates repair into productivity.",
        usage: "Weekly sauna sessions became part of his recoverymaxxing protocol.",
        related: ["Sleepmaxxing", "Saunamaxxing"],
        sectionId: "body"
      },
      {
        slug: "nutritionmaxxing",
        title: "Nutritionmaxxing",
        type: "verb",
        definition: "Structuring diet intentionally to influence energy and body composition. Treats food as input rather than entertainment.",
        usage: "Once she began nutritionmaxxing, her afternoon crashes disappeared.",
        related: ["Macromaxxing", "Proteinmaxxing", "Lunchmaxxing"],
        sectionId: "body"
      },
      {
        slug: "macromaxxing",
        title: "Macromaxxing",
        type: "verb",
        definition: "Tracking protein, fats, and carbohydrates to deliberately control physique outcomes. Converts eating into measurable adjustment.",
        usage: "He weighs every meal because he’s macromaxxing consistently.",
        related: ["Nutritionmaxxing", "Bodyfatmaxxing"],
        sectionId: "body"
      },
      {
        slug: "proteinmaxxing",
        title: "Proteinmaxxing",
        type: "verb",
        definition: "Prioritizing protein intake to support muscle growth and recovery.",
        usage: "Every meal now centers around protein because he’s proteinmaxxing.",
        related: ["Gymmaxxing", "Macromaxxing"],
        sectionId: "body"
      },
      {
        slug: "posturemaxxing",
        title: "Posturemaxxing",
        type: "verb",
        definition: "Improving physical alignment to increase perceived presence and height. Enhances structure instantly.",
        usage: "After months of posturemaxxing, he carried himself differently in every room.",
        related: ["Framemaxxing", "Looksmaxxing"],
        sectionId: "body"
      },
      {
        slug: "dimorphismaxxing",
        title: "Dimorphismaxxing",
        type: "verb",
        definition: "Enhancing traits that exaggerate masculine or feminine biological contrast. Amplifies sexual signaling.",
        usage: "He shifted his training toward shoulders and traps as part of dimorphismaxxing.",
        related: ["Bonemaxxing", "Testosteronemaxxing"],
        sectionId: "body"
      },
      {
        slug: "bonemaxxing",
        title: "Bonemaxxing",
        type: "verb",
        definition: "Optimizing skeletal appearance through leanness, lighting, or structural emphasis. Centers on jawline sharpness and cheekbone prominence.",
        usage: "Once he leaned out, the bonemaxxing effect was obvious in photos.",
        related: ["Bonesmashing", "Aestheticmaxxing"],
        sectionId: "body"
      },
      {
        slug: "bonesmashing",
        title: "Bonesmashing",
        type: "noun, verb",
        definition: "An extreme attempt to alter bone structure through repeated impact. Represents the outer boundary of aesthetic optimization culture.",
        usage: "When surface changes felt insufficient, he researched bonesmashing.",
        related: ["Hardmaxxing", "Surgerymaxxing"],
        sectionId: "body"
      },
      {
        slug: "heightmaxxing",
        title: "Heightmaxxing",
        type: "verb",
        definition: "Improving actual or perceived height through posture, styling, or intervention. Acknowledges height as a dominant visual status signal.",
        usage: "Between footwear strategy and posture adjustments, he was clearly heightmaxxing.",
        related: ["Posturemaxxing", "Dimorphismaxxing"],
        sectionId: "body"
      },
      {
        slug: "bodyfatmaxxing",
        title: "Bodyfatmaxxing",
        type: "verb",
        definition: "Manipulating body fat percentage to sharpen structural visibility. Recognizes that small composition shifts dramatically alter perception.",
        usage: "She entered a controlled deficit because she was bodyfatmaxxing before summer.",
        related: ["Cutmaxxing", "Bulkmaxxing"],
        sectionId: "body"
      },
      {
        slug: "bulkmaxxing",
        title: "Bulkmaxxing",
        type: "verb",
        definition: "Intentionally increasing caloric intake to build muscle mass. Prioritizes size accumulation over immediate leanness.",
        usage: "He committed to bulkmaxxing through winter without worrying about aesthetics.",
        related: ["Cutmaxxing", "Gymmaxxing"],
        sectionId: "body"
      },
      {
        slug: "cutmaxxing",
        title: "Cutmaxxing",
        type: "verb",
        definition: "Reducing body fat to enhance muscular definition and structure. Sharpens lines and increases visible contrast.",
        usage: "After months of growth, she transitioned into cutmaxxing.",
        related: ["Bodyfatmaxxing", "Bonemaxxing"],
        sectionId: "body"
      },
      {
        slug: "testosteronemaxxing",
        title: "Testosteronemaxxing",
        type: "verb",
        definition: "Optimizing behaviors to support higher testosterone levels. Includes resistance training and sleep discipline.",
        usage: "Heavy lifting and early nights became part of his testosteronemaxxing strategy.",
        related: ["Hormonemaxxing", "Dimorphismaxxing"],
        sectionId: "body"
      },
      {
        slug: "surgerymaxxing",
        title: "Surgerymaxxing",
        type: "verb",
        definition: "Using cosmetic or medical procedures to alter structural traits. Moves beyond surface refinement into permanent modification.",
        usage: "When incremental changes weren’t enough, she considered surgerymaxxing.",
        related: ["Hardmaxxing", "Bonemaxxing"],
        sectionId: "body"
      },
      {
        slug: "hardmaxxing",
        title: "Hardmaxxing",
        type: "verb",
        definition: "Pursuing extreme forms of optimization regardless of risk or perception. Prioritizes maximum impact over subtle improvement.",
        usage: "That transformation wasn’t gradual — it was full hardmaxxing.",
        related: ["Surgerymaxxing", "Bonesmashing"],
        sectionId: "body"
      }
    ]
  },
  {
    id: "discipline",
    title: "Discipline / Internal Systems",
    subtitle: "Section II",
    description: "Engineering the internal state for maximum output and stability.",
    terms: [
      {
        slug: "disciplinemaxxing",
        title: "Disciplinemaxxing",
        type: "verb",
        definition: "Structuring behavior around consistency rather than emotion. It assumes that mood is unstable but routine can be engineered.",
        usage: "He doesn't wait to feel inspired anymore — he's disciplinemaxxing.",
        related: ["Willpowermaxxing", "Habitmaxxing", "Routinemaxxing"],
        sectionId: "discipline",
        takeaway: "Discipline is the engineering of consistency to replace the volatility of emotion.",
        actionStep: "Remove one decision from your morning routine by automating it (e.g., pre-selecting clothes or meals)."
      },
      {
        slug: "willpowermaxxing",
        title: "Willpowermaxxing",
        type: "verb",
        definition: "Deliberately strengthening impulse control through restraint. Frames resistance as training.",
        usage: "Deleting social media for the month was part of her willpowermaxxing plan.",
        related: ["Disciplinemaxxing", "Dopaminemaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "habitmaxxing",
        title: "Habitmaxxing",
        type: "verb",
        definition: "Building repeatable behaviors under the belief that consistency compounds. Favors repetition over motivation.",
        usage: "He reads ten pages every night because he’s habitmaxxing long-term.",
        related: ["Routinemaxxing", "Disciplinemaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "routinemaxxing",
        title: "Routinemaxxing",
        type: "verb",
        definition: "Designing daily structure to minimize friction and decision fatigue. Converts variability into predictability.",
        usage: "Her mornings run automatically now — that’s routinemaxxing in practice.",
        related: ["Habitmaxxing", "Systemmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "energymaxxing",
        title: "Energymaxxing",
        type: "verb",
        definition: "Managing inputs to maintain stable physical and cognitive energy. Treats vitality as a resource.",
        usage: "He stopped late-night work because he’s energymaxxing this quarter.",
        related: ["Sleepmaxxing", "Nutritionmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "focusmaxxing",
        title: "Focusmaxxing",
        type: "verb",
        definition: "Eliminating distractions to increase depth of concentration. Frames attention as scarce capital.",
        usage: "She silences notifications during deep work because she's focusmaxxing.",
        related: ["Timemaxxing", "Disciplinemaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "brainmaxxing",
        title: "Brainmaxxing",
        type: "verb",
        definition: "Improving cognitive performance through study, training, or lifestyle refinement. Treats intelligence as expandable.",
        usage: "Replacing passive scrolling with deliberate study was part of his brainmaxxing phase.",
        related: ["Memorymaxxing", "Mindmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "mindmaxxing",
        title: "Mindmaxxing",
        type: "verb",
        definition: "Optimizing internal narrative, belief systems, and perception. Focuses on reframing interpretation.",
        usage: "Instead of reacting emotionally, she reframed it — pure mindmaxxing.",
        related: ["Framemaxxing", "Stoicmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "memorymaxxing",
        title: "Memorymaxxing",
        type: "verb",
        definition: "Improving recall and retention through repetition and systemization. Emphasizes review cycles.",
        usage: "He revisits key ideas weekly because he’s memorymaxxing deliberately.",
        related: ["Brainmaxxing", "Habitmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "dopaminemaxxing",
        title: "Dopaminemaxxing",
        type: "verb",
        definition: "Regulating stimulation to control motivation and reward sensitivity. May involve reducing overstimulation.",
        usage: "She limited short-form content because she’s dopaminemaxxing her attention span.",
        related: ["Willpowermaxxing", "Focusmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "coldshowermaxxing",
        title: "Coldshowermaxxing",
        type: "verb",
        definition: "Using voluntary discomfort to train resilience and stress tolerance. Reframes discomfort as conditioning.",
        usage: "He ends every shower cold because he’s coldshowermaxxing consistency.",
        related: ["Asceticmaxxing", "Disciplinemaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "saunamaxxing",
        title: "Saunamaxxing",
        type: "verb",
        definition: "Using heat exposure to support recovery and cardiovascular health. Integrates ritualized stress and release.",
        usage: "Weekly sauna sessions became part of her saunamaxxing schedule.",
        related: ["Recoverymaxxing", "Healthmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "asceticmaxxing",
        title: "Asceticmaxxing",
        type: "verb",
        definition: "Reducing comfort to increase clarity and discipline. Removes excess consumption and distraction.",
        usage: "He simplified his lifestyle as part of asceticmaxxing.",
        related: ["Monkmaxxing", "Willpowermaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "monkmaxxing",
        title: "Monkmaxxing",
        type: "verb",
        definition: "Temporarily withdrawing from distraction to focus inward. Often includes reduced social interaction and limited digital exposure.",
        usage: "She went offline for a month because she was monkmaxxing.",
        related: ["Asceticmaxxing", "Focusmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "meditationmaxxing",
        title: "Meditationmaxxing",
        type: "verb",
        definition: "Practicing structured awareness to improve emotional regulation and clarity. Treats attention as trainable.",
        usage: "Daily sessions became part of his meditationmaxxing routine.",
        related: ["Mindmaxxing", "Calmmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "stoicmaxxing",
        title: "Stoicmaxxing",
        type: "verb",
        definition: "Applying stoic principles to maintain emotional stability. Emphasizes control over reaction.",
        usage: "He didn’t escalate the conflict — he was stoicmaxxing.",
        related: ["Composuremaxxing", "Restraintmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "silencemaxxing",
        title: "Silencemaxxing",
        type: "verb",
        definition: "Reducing unnecessary speech to increase perceived control. Amplifies presence through restraint.",
        usage: "He answered briefly and let the room sit — silencemaxxing in effect.",
        related: ["Framemaxxing", "Composuremaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "composuremaxxing",
        title: "Composuremaxxing",
        type: "verb",
        definition: "Maintaining calm external demeanor under pressure. Strengthens perceived stability and authority.",
        usage: "Even during criticism, she remained composed — composuremaxxing instinctively.",
        related: ["Calmmaxxing", "Stoicmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "calmmaxxing",
        title: "Calmmaxxing",
        type: "verb",
        definition: "Reducing visible emotional volatility. Enhances clarity and lowers reactive decision-making.",
        usage: "He slowed his breathing before responding because he’s calmmaxxing deliberately.",
        related: ["Composuremaxxing", "Mindmaxxing"],
        sectionId: "discipline"
      },
      {
        slug: "restraintmaxxing",
        title: "Restraintmaxxing",
        type: "verb",
        definition: "Exercising deliberate control over impulse, speech, or reaction. Reframes limitation as strength.",
        usage: "She didn’t overshare in the meeting — restraintmaxxing quietly.",
        related: ["Willpowermaxxing", "Silencemaxxing"],
        sectionId: "discipline"
      }
    ]
  },
  {
    id: "money",
    title: "Money / Capital / Leverage",
    subtitle: "Section III",
    description: "The accumulation of financial and structural power.",
    terms: [
      {
        slug: "moneymaxxing",
        title: "Moneymaxxing",
        type: "verb",
        definition: "Making decisions primarily to maximize financial return. Compensation becomes the dominant variable in decision-making.",
        usage: "He took the higher-paying role across the country because he's moneymaxxing right now.",
        related: ["Incomemaxxing", "Careermaxxing", "Leveragemaxxing"],
        sectionId: "money",
        takeaway: "Moneymaxxing prioritizes the accumulation of capital as the primary metric of success in the short term.",
        actionStep: "Identify your highest hourly-rate activity and ruthlessly eliminate or delegate everything else for 30 days."
      },
      {
        slug: "incomemaxxing",
        title: "Incomemaxxing",
        type: "verb",
        definition: "Structuring life around aggressive income growth. Emphasizes expanding cash flow through job shifts.",
        usage: "Relocating for commission upside was a clear incomemaxxing move.",
        related: ["Moneymaxxing", "Sidehustlemaxxing"],
        sectionId: "money"
      },
      {
        slug: "wealthmaxxing",
        title: "Wealthmaxxing",
        type: "verb",
        definition: "Building long-term net worth rather than focusing on short-term income. Prioritizes ownership and compounding.",
        usage: "She stopped chasing salary bumps and started wealthmaxxing through equity.",
        related: ["Assetmaxxing", "Equitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "assetmaxxing",
        title: "Assetmaxxing",
        type: "verb",
        definition: "Acquiring appreciating or income-generating assets. Favors ownership over consumption.",
        usage: "Buying rental property was part of his assetmaxxing strategy.",
        related: ["Wealthmaxxing", "Ownershipmaxxing"],
        sectionId: "money"
      },
      {
        slug: "equitymaxxing",
        title: "Equitymaxxing",
        type: "verb",
        definition: "Prioritizing ownership stakes in ventures or organizations. Accepts delayed payout for long-term upside.",
        usage: "He negotiated shares instead of a higher salary because he’s equitymaxxing.",
        related: ["Assetmaxxing", "Optionalitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "careermaxxing",
        title: "Careermaxxing",
        type: "verb",
        definition: "Strategically navigating roles and industries for upward trajectory. Emphasizes growth path over comfort.",
        usage: "Switching industries for future leverage was pure careermaxxing.",
        related: ["Titlemaxxing", "Opportunitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "titlemaxxing",
        title: "Titlemaxxing",
        type: "verb",
        definition: "Prioritizing job titles as signals of authority or prestige. Treats perception value as strategic positioning.",
        usage: "She accepted the role mainly for the title — definite titlemaxxing.",
        related: ["Statusmaxxing", "Careermaxxing"],
        sectionId: "money"
      },
      {
        slug: "networkmaxxing",
        title: "Networkmaxxing",
        type: "verb",
        definition: "Building relationships to increase access and opportunity. Treats proximity as leverage.",
        usage: "He stayed after the conference because he’s networkmaxxing consistently.",
        related: ["Opportunitymaxxing", "Statusmaxxing"],
        sectionId: "money"
      },
      {
        slug: "dealmaxxing",
        title: "Dealmaxxing",
        type: "verb",
        definition: "Optimizing negotiation terms for favorable positioning. Assumes most agreements are adjustable.",
        usage: "He renegotiated before signing because he’s dealmaxxing every contract.",
        related: ["Leveragemaxxing", "Riskmaxxing"],
        sectionId: "money"
      },
      {
        slug: "opportunitymaxxing",
        title: "Opportunitymaxxing",
        type: "verb",
        definition: "Positioning oneself where upside probability is highest. Favors growth potential over static stability.",
        usage: "Moving to a faster market was opportunitymaxxing, not impulse.",
        related: ["Careermaxxing", "Optionalitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "skillmaxxing",
        title: "Skillmaxxing",
        type: "verb",
        definition: "Developing abilities that increase long-term leverage. Treats competence as durable capital.",
        usage: "She enrolled in advanced training because she’s skillmaxxing deliberately.",
        related: ["Careermaxxing", "Brainmaxxing"],
        sectionId: "money"
      },
      {
        slug: "sidehustlemaxxing",
        title: "Sidehustlemaxxing",
        type: "verb",
        definition: "Building secondary income streams alongside primary employment. Diversifies earning power.",
        usage: "Launching a small digital product was part of his sidehustlemaxxing phase.",
        related: ["Incomemaxxing", "Optionalitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "arbitragemaxxing",
        title: "Arbitragemaxxing",
        type: "verb",
        definition: "Exploiting inefficiencies between systems or markets. Identifies price gaps or informational advantages.",
        usage: "Buying low and reselling strategically was classic arbitragemaxxing.",
        related: ["Leveragemaxxing", "Opportunitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "timemaxxing",
        title: "Timemaxxing",
        type: "verb",
        definition: "Treating time as the primary scarce resource. Eliminates low-return commitments.",
        usage: "He declined unnecessary meetings because he’s timemaxxing.",
        related: ["Productivitymaxxing", "Focusmaxxing"],
        sectionId: "money"
      },
      {
        slug: "productivitymaxxing",
        title: "Productivitymaxxing",
        type: "verb",
        definition: "Optimizing tools and workflows to increase output efficiency. Systemizes execution.",
        usage: "Automating the reporting system was productivitymaxxing in action.",
        related: ["Systemmaxxing", "Timemaxxing"],
        sectionId: "money"
      },
      {
        slug: "systemmaxxing",
        title: "Systemmaxxing",
        type: "verb",
        definition: "Designing repeatable structures to reduce randomness. Converts reactive behavior into predictable processes.",
        usage: "She built a repeatable onboarding flow because she’s systemmaxxing.",
        related: ["Metamaxxing", "Productivitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "metamaxxing",
        title: "Metamaxxing",
        type: "verb",
        definition: "Optimizing the systems used to optimize everything else. Operates one level above execution.",
        usage: "Redesigning the workflow entirely was metamaxxing, not tweaking.",
        related: ["Systemmaxxing", "Optimizationmaxxing"],
        sectionId: "money"
      },
      {
        slug: "automationmaxxing",
        title: "Automationmaxxing",
        type: "verb",
        definition: "Replacing manual effort with automated systems. Increases scalability and reduces repetitive labor.",
        usage: "He automated client onboarding because he’s automationmaxxing.",
        related: ["Leveragemaxxing", "ScalemaXXing"],
        sectionId: "money"
      },
      {
        slug: "leveragemaxxing",
        title: "Leveragemaxxing",
        type: "verb",
        definition: "Using resources, relationships, or systems to amplify output. Seeks disproportionate returns.",
        usage: "Structuring the deal for scalability was clear leveragemaxxing.",
        related: ["ScalemaXXing", "Opportunitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "riskmaxxing",
        title: "Riskmaxxing",
        type: "verb",
        definition: "Accepting calculated risk to increase potential upside. Treats volatility as opportunity.",
        usage: "Investing early in the startup was riskmaxxing with intention.",
        related: ["Opportunitymaxxing", "Leveragemaxxing"],
        sectionId: "money"
      },
      {
        slug: "securitymaxxing",
        title: "Securitymaxxing",
        type: "verb",
        definition: "Prioritizing stability and downside protection. Builds buffers and reduces exposure to collapse.",
        usage: "He built emergency reserves first — that’s securitymaxxing.",
        related: ["Wealthmaxxing", "Optionalitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "cashflowmaxxing",
        title: "Cashflowmaxxing",
        type: "verb",
        definition: "Increasing predictable recurring revenue. Values steady inflow over speculative gain.",
        usage: "Monthly retainers became central to his cashflowmaxxing strategy.",
        related: ["Assetmaxxing", "Incomemaxxing"],
        sectionId: "money"
      },
      {
        slug: "liquiditymaxxing",
        title: "Liquiditymaxxing",
        type: "verb",
        definition: "Maintaining accessible capital for flexibility. Favors optional access over illiquid positioning.",
        usage: "She avoided locking funds long-term because she’s liquiditymaxxing.",
        related: ["Securitymaxxing", "Cashflowmaxxing"],
        sectionId: "money"
      },
      {
        slug: "debtmaxxing",
        title: "Debtmaxxing",
        type: "verb",
        definition: "Strategically using borrowed capital to increase leverage. Treats credit as multiplier.",
        usage: "Financing expansion was debtmaxxing with discipline.",
        related: ["Leveragemaxxing", "Riskmaxxing"],
        sectionId: "money"
      },
      {
        slug: "creditmaxxing",
        title: "Creditmaxxing",
        type: "verb",
        definition: "Optimizing credit profile to expand borrowing power. Focuses on score management.",
        usage: "He paid balances strategically because he’s creditmaxxing.",
        related: ["Debtmaxxing", "Securitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "taxmaxxing",
        title: "Taxmaxxing",
        type: "verb",
        definition: "Structuring income and assets to minimize tax burden legally. Emphasizes strategic entity formation.",
        usage: "She restructured under an LLC as part of taxmaxxing.",
        related: ["Assetmaxxing", "Ownershipmaxxing"],
        sectionId: "money"
      },
      {
        slug: "ownershipmaxxing",
        title: "Ownershipmaxxing",
        type: "verb",
        definition: "Prioritizing ownership over temporary access. Captures long-term control.",
        usage: "He stopped leasing equipment because he’s ownershipmaxxing.",
        related: ["Assetmaxxing", "Wealthmaxxing"],
        sectionId: "money"
      },
      {
        slug: "optionalitymaxxing",
        title: "Optionalitymaxxing",
        type: "verb",
        definition: "Maximizing future choices through strategic positioning. Preserves flexibility.",
        usage: "She avoided locking into one path because she’s optionalitymaxxing.",
        related: ["Opportunitymaxxing", "Securitymaxxing"],
        sectionId: "money"
      },
      {
        slug: "scalemaxxing",
        title: "Scalemaxxing",
        type: "verb",
        definition: "Designing systems capable of exponential growth. Shifts focus from effort to multiplication.",
        usage: "He built the product replicable because he’s scalemaxxing.",
        related: ["Leveragemaxxing", "Automationmaxxing"],
        sectionId: "money"
      },
      {
        slug: "distributionmaxxing",
        title: "Distributionmaxxing",
        type: "verb",
        definition: "Expanding reach to amplify impact. Recognizes that access often matters more than creation.",
        usage: "He focused on audience channels because he’s distributionmaxxing.",
        related: ["ScalemaXXing", "Contentmaxxing"],
        sectionId: "money"
      },
      {
        slug: "exitmaxxing",
        title: "Exitmaxxing",
        type: "verb",
        definition: "Structuring ventures for eventual liquidity events. Plans backward from acquisition.",
        usage: "He built the company to sell — intentional exitmaxxing.",
        related: ["Wealthmaxxing", "Cashflowmaxxing"],
        sectionId: "money"
      }
    ]
  },
  {
    id: "status",
    title: "Status / Dominance / Social Hierarchy",
    subtitle: "Section IV",
    description: "The navigation and engineering of social rank.",
    terms: [
      {
        slug: "mog",
        title: "Mog",
        type: "noun, verb",
        definition: "To visibly dominate another person in presence, appearance, or status. Shorthand for asymmetry in hierarchy.",
        usage: "He walked into the event and mogged the entire room without raising his voice.",
        related: ["Mogging", "Moggmaxxing", "Statusmaxxing"],
        sectionId: "status"
      },
      {
        slug: "mogging",
        title: "Mogging",
        type: "verb",
        definition: "Repeatedly outclassing others in visible dimensions such as height, build, composure, or style.",
        usage: "Standing next to him, you could tell he was mogging effortlessly.",
        related: ["Mog", "Dimorphismaxxing", "Bonemaxxing"],
        sectionId: "status"
      },
      {
        slug: "moggmaxxing",
        title: "Moggmaxxing",
        type: "verb",
        definition: "Deliberately optimizing traits to increase one’s ability to mog others. Proactive hierarchy engineering.",
        usage: "His wardrobe overhaul and physique shift were strategic moggmaxxing decisions.",
        related: ["Looksmaxxing", "Statusmaxxing", "Dimorphismaxxing"],
        sectionId: "status"
      },
      {
        slug: "statusmaxxing",
        title: "Statusmaxxing",
        type: "verb",
        definition: "Making decisions that increase perceived rank or prestige. Prioritizes visibility and association.",
        usage: "Joining that board wasn’t about interest — it was statusmaxxing.",
        related: ["Titlemaxxing", "Cloutmaxxing", "Mogging"],
        sectionId: "status"
      },
      {
        slug: "cloutmaxxing",
        title: "Cloutmaxxing",
        type: "verb",
        definition: "Increasing perceived influence through visibility and association. Leverages proximity to relevance.",
        usage: "Collaborating with larger accounts was deliberate cloutmaxxing.",
        related: ["Statusmaxxing", "Contentmaxxing", "Distributionmaxxing"],
        sectionId: "status"
      },
      {
        slug: "auramaxxing",
        title: "Auramaxxing",
        type: "verb",
        definition: "Cultivating intangible presence through composure, restraint, and projection. Focuses on controlled perception.",
        usage: "He spoke minimally and held eye contact — clear auramaxxing.",
        related: ["Composuremaxxing", "Silencemaxxing", "Framemaxxing"],
        sectionId: "status"
      },
      {
        slug: "framemaxxing",
        title: "Framemaxxing",
        type: "verb",
        definition: "Controlling the narrative structure within an interaction. Determines how events are interpreted.",
        usage: "When challenged, she reframed the conversation immediately — framemaxxing instinctively.",
        related: ["Auramaxxing", "Rizzmaxxing"],
        sectionId: "status"
      },
      {
        slug: "framemogging",
        title: "Framemogging",
        type: "noun, verb",
        definition: "Combining narrative control with visible dominance so hierarchy feels pre-decided. Framemogging occurs when someone not only outclasses you, but also defines the interaction in a way that makes the outclassing read as natural, inevitable, and unchallengeable.",
        usage: "He didn’t just mog — he set the premise first. Full framemogging.",
        related: ["Framemaxxing", "Mogging", "Auramaxxing", "Dominancemaxxing"],
        sectionId: "status"
      },
      {
        slug: "presencemaxxing",
        title: "Presencemaxxing",
        type: "verb",
        definition: "Enhancing how one occupies physical or conversational space. Integrates posture, silence, and pacing.",
        usage: "He slowed his movements and lowered his tone — presencemaxxing in effect.",
        related: ["Auramaxxing", "Posturemaxxing"],
        sectionId: "status"
      },
      {
        slug: "dominancemaxxing",
        title: "Dominancemaxxing",
        type: "verb",
        definition: "Projecting authority through confidence, control, and physical signaling. Prioritizes clarity and decisiveness.",
        usage: "He took control of the negotiation quickly — dominancemaxxing deliberately.",
        related: ["Framemaxxing", "Mogging"],
        sectionId: "status"
      },
      {
        slug: "hierarchymaxxing",
        title: "Hierarchymaxxing",
        type: "verb",
        definition: "Strategically positioning oneself higher within visible social structures. Focuses on relative placement.",
        usage: "Aligning with senior leadership was calculated hierarchymaxxing.",
        related: ["Statusmaxxing", "Networkmaxxing"],
        sectionId: "status"
      },
      {
        slug: "respectmaxxing",
        title: "Respectmaxxing",
        type: "verb",
        definition: "Cultivating behavior that increases perceived credibility and seriousness. Emphasizes consistency and restraint.",
        usage: "He stopped over-explaining himself — subtle respectmaxxing.",
        related: ["Silencemaxxing", "Composuremaxxing"],
        sectionId: "status"
      },
      {
        slug: "unc",
        title: "Unc",
        type: "noun",
        definition: "A generational positioning term signaling older-brother authority or seasoned composure. Implies guidance without insecurity.",
        usage: "When he stepped in calmly to resolve the dispute, he moved like Unc.",
        related: ["Respectmaxxing", "Presencemaxxing"],
        sectionId: "status"
      },
      {
        slug: "youngunc",
        title: "YoungUnc",
        type: "noun",
        definition: "A younger individual who exhibits seasoned authority or composure beyond peers. Suggests maturity within one’s age group.",
        usage: "He handled the room like YoungUnc despite being the youngest there.",
        related: ["Unc", "Composuremaxxing"],
        sectionId: "status"
      },
      {
        slug: "oldhead",
        title: "Oldhead",
        type: "noun",
        definition: "An older individual resistant to newer cultural shifts. Often signals generational rigidity.",
        usage: "He dismissed the trend immediately — classic Oldhead reaction.",
        related: ["Unc", "Hierarchymaxxing"],
        sectionId: "status"
      },
      {
        slug: "washed",
        title: "Washed",
        type: "adjective",
        definition: "Past peak performance or perceived decline in relevance. Indicates loss of comparative dominance.",
        usage: "After a few public missteps, people started calling him washed.",
        related: ["Primemaxxing", "Rebrandmaxxing"],
        sectionId: "status"
      },
      {
        slug: "primemaxxing",
        title: "Primemaxxing",
        type: "verb",
        definition: "Attempting to operate at peak physical or social condition. Implies awareness of timing.",
        usage: "He’s training aggressively because he wants to be primemaxxing this summer.",
        related: ["Looksmaxxing", "Bodyfatmaxxing"],
        sectionId: "status"
      },
      {
        slug: "rebrandmaxxing",
        title: "Rebrandmaxxing",
        type: "verb",
        definition: "Strategically altering public image to reset perception. Recognizes that identity can be repositioned.",
        usage: "She shifted her tone and aesthetic — intentional rebrandmaxxing.",
        related: ["Auramaxxing", "Statusmaxxing"],
        sectionId: "status"
      },
      {
        slug: "image-maxxing",
        title: "Image-maxxing",
        type: "verb",
        definition: "Curating external presentation to control perception. Focuses on aesthetic cohesion.",
        usage: "His social presence is tightly controlled — image-maxxing clearly.",
        related: ["Aestheticmaxxing", "Brandmaxxing"],
        sectionId: "status"
      },
      {
        slug: "brandmaxxing",
        title: "Brandmaxxing",
        type: "verb",
        definition: "Aligning behavior and visuals to create consistent identity signals. Treats reputation as strategic capital.",
        usage: "Every post reinforces his niche — that’s brandmaxxing.",
        related: ["Imagemaxxing", "Contentmaxxing"],
        sectionId: "status"
      },
      {
        slug: "aestheticmaxxing",
        title: "Aestheticmaxxing",
        type: "verb",
        definition: "Curating visual style to amplify perceived value. Integrates clothing and environment into status signaling.",
        usage: "Her workspace redesign was aestheticmaxxing, not necessity.",
        related: ["Brandmaxxing", "Setupmaxxing"],
        sectionId: "status"
      },
      {
        slug: "setupmaxxing",
        title: "Setupmaxxing",
        type: "verb",
        definition: "Optimizing physical or digital environments for authority or performance. Enhances perceived seriousness.",
        usage: "Upgrading lighting and audio was clear setupmaxxing.",
        related: ["Deskmaxxing", "Aestheticmaxxing"],
        sectionId: "status"
      },
      {
        slug: "deskmaxxing",
        title: "Deskmaxxing",
        type: "verb",
        definition: "Refining workspace layout for productivity and signaling. Improves both function and perception.",
        usage: "He reorganized everything before launch — deskmaxxing deliberately.",
        related: ["Setupmaxxing", "Productivitymaxxing"],
        sectionId: "status"
      },
      {
        slug: "environmentmaxxing",
        title: "Environmentmaxxing",
        type: "verb",
        definition: "Altering surroundings to influence mindset and output. Recognizes that space shapes behavior.",
        usage: "She moved closer to opportunity — environmentmaxxing strategically.",
        related: ["Setupmaxxing", "Focusmaxxing"],
        sectionId: "status"
      },
      {
        slug: "roommaxxing",
        title: "Roommaxxing",
        type: "verb",
        definition: "Optimizing personal living space for clarity and aesthetic alignment. Blends comfort and identity projection.",
        usage: "Before inviting people over, he spent the weekend roommaxxing.",
        related: ["Aestheticmaxxing", "Environmentmaxxing"],
        sectionId: "status"
      },
      {
        slug: "gearmaxxing",
        title: "Gearmaxxing",
        type: "verb",
        definition: "Upgrading equipment to gain marginal performance or signaling advantage. Assumes tools influence output.",
        usage: "He bought premium equipment because he’s gearmaxxing ahead of competition.",
        related: ["Setupmaxxing", "Statusmaxxing"],
        sectionId: "status"
      }
    ]
  },
  {
    id: "social",
    title: "Social / Charisma / Interpersonal Dynamics",
    subtitle: "Section V",
    description: "Optimizing the mechanics of human interaction.",
    terms: [
      {
        slug: "rizz",
        title: "Rizz",
        type: "noun",
        definition: "Charisma expressed through conversational confidence and timing. Refers to controlled charm rather than loud performance.",
        usage: "He didn't overtalk — he just had enough rizz to steer the interaction.",
        related: ["Rizzmaxxing", "Framemaxxing", "Confidencemaxxing"],
        sectionId: "social"
      },
      {
        slug: "rizzmaxxing",
        title: "Rizzmaxxing",
        type: "verb",
        definition: "Deliberately improving conversational charm and social fluidity. Includes storytelling and tone control.",
        usage: "He practiced speaking slower and clearer because he’s rizzmaxxing intentionally.",
        related: ["Rizz", "Confidencemaxxing", "Framemaxxing"],
        sectionId: "social"
      },
      {
        slug: "confidencemaxxing",
        title: "Confidencemaxxing",
        type: "verb",
        definition: "Projecting certainty regardless of internal doubt. Stabilizes perception even when outcomes are uncertain.",
        usage: "She answered decisively even without perfect information — confidencemaxxing instinctively.",
        related: ["Dominancemaxxing", "Auramaxxing"],
        sectionId: "social"
      },
      {
        slug: "socialmaxxing",
        title: "Socialmaxxing",
        type: "verb",
        definition: "Deliberately increasing social exposure and presence. Prioritizes attendance and visibility.",
        usage: "He forced himself to attend events because he’s socialmaxxing this year.",
        related: ["Networkmaxxing", "Statusmaxxing"],
        sectionId: "social"
      },
      {
        slug: "charismamaxxing",
        title: "Charismamaxxing",
        type: "verb",
        definition: "Enhancing warmth and magnetism through body language and tone. Balances dominance with approachability.",
        usage: "She adjusted her pacing and eye contact — charismamaxxing deliberately.",
        related: ["Rizzmaxxing", "Auramaxxing"],
        sectionId: "social"
      },
      {
        slug: "datingmaxxing",
        title: "Datingmaxxing",
        type: "verb",
        definition: "Optimizing presentation and behavior for romantic leverage. Integrates looks, timing, and calibration.",
        usage: "He upgraded his wardrobe before reentering the market — datingmaxxing strategically.",
        related: ["Looksmaxxing", "Rizzmaxxing"],
        sectionId: "social"
      },
      {
        slug: "textmaxxing",
        title: "Textmaxxing",
        type: "verb",
        definition: "Strategically managing response timing and tone in digital communication. Controls pacing to preserve intrigue.",
        usage: "He didn’t respond instantly because he’s textmaxxing intentionally.",
        related: ["Framemaxxing", "Datingmaxxing"],
        sectionId: "social"
      },
      {
        slug: "vibemaxxing",
        title: "Vibemaxxing",
        type: "verb",
        definition: "Optimizing emotional atmosphere within interaction. Adjusts energy levels to align with context.",
        usage: "She softened her tone to shift the mood — vibemaxxing in real time.",
        related: ["Auramaxxing", "Charismamaxxing"],
        sectionId: "social"
      },
      {
        slug: "bantermaxxing",
        title: "Bantermaxxing",
        type: "verb",
        definition: "Improving playful conversational agility. Emphasizes timing, subtlety, and confidence.",
        usage: "He matched her teasing without escalating — bantermaxxing naturally.",
        related: ["Rizzmaxxing", "Framemaxxing"],
        sectionId: "social"
      },
      {
        slug: "calibrationmaxxing",
        title: "Calibrationmaxxing",
        type: "verb",
        definition: "Reading and adjusting behavior based on subtle social cues. Prevents overextension or misalignment.",
        usage: "He lowered intensity mid-conversation — calibrationmaxxing precisely.",
        related: ["Rizzmaxxing", "Vibemaxxing"],
        sectionId: "social"
      },
      {
        slug: "jestermaxxing",
        title: "Jestermaxxing",
        type: "verb",
        definition: "Using humor, self-deprecation, or constant joking to gain social access while avoiding direct status risk. Jestermaxxing increases likeability and lowers tension, but can cap perceived authority when humor becomes the default mode rather than a controlled tool.",
        usage: "He kept turning every serious moment into a bit — jestermaxxing in real time.",
        related: ["Bantermaxxing", "Validationmaxxing", "Attentionmaxxing", "Composuremaxxing"],
        sectionId: "social"
      },
      {
        slug: "boundarymaxxing",
        title: "Boundarymaxxing",
        type: "verb",
        definition: "Setting clear limits without emotional overreaction. Protects leverage through clarity.",
        usage: "She declined without overexplaining — boundarymaxxing confidently.",
        related: ["Restraintmaxxing", "Respectmaxxing"],
        sectionId: "social"
      },
      {
        slug: "selectivitymaxxing",
        title: "Selectivitymaxxing",
        type: "verb",
        definition: "Being intentionally selective to preserve value perception. Increases desirability through scarcity.",
        usage: "He stopped saying yes to everything — selectivitymaxxing strategically.",
        related: ["Statusmaxxing", "Datingmaxxing"],
        sectionId: "social"
      },
      {
        slug: "scarcitymaxxing",
        title: "Scarcitymaxxing",
        type: "verb",
        definition: "Limiting availability to increase perceived value. Assumes attention rises when access decreases.",
        usage: "She reduced public appearances — scarcitymaxxing deliberately.",
        related: ["Selectivitymaxxing", "Statusmaxxing"],
        sectionId: "social"
      },
      {
        slug: "attentionmaxxing",
        title: "Attentionmaxxing",
        type: "verb",
        definition: "Actively seeking visibility within social environments. Prioritizes engagement and recognition.",
        usage: "He told the loudest story — attentionmaxxing openly.",
        related: ["Cloutmaxxing", "Engagementmaxxing"],
        sectionId: "social"
      },
      {
        slug: "validationmaxxing",
        title: "Validationmaxxing",
        type: "verb",
        definition: "Optimizing behavior for external approval. Substitutes internal stability with audience reaction.",
        usage: "Posting purely for reactions felt like validationmaxxing.",
        related: ["Attentionmaxxing", "Cloutmaxxing"],
        sectionId: "social"
      },
      {
        slug: "image-managementmaxxing",
        title: "Image Managementmaxxing",
        type: "verb",
        definition: "Maintaining consistency between public and curated persona. Prevents reputational volatility.",
        usage: "She removed older content — image managementmaxxing strategically.",
        related: ["Brandmaxxing", "Rebrandmaxxing"],
        sectionId: "social"
      },
      {
        slug: "reputationmaxxing",
        title: "Reputationmaxxing",
        type: "verb",
        definition: "Deliberately cultivating long-term perception capital. Prioritizes credibility over momentary gain.",
        usage: "He declined the shortcut because he’s reputationmaxxing long-term.",
        related: ["Respectmaxxing", "Brandmaxxing"],
        sectionId: "social"
      }
    ]
  },
  {
    id: "attention",
    title: "Attention Economy / Internet Layer",
    subtitle: "Section VI",
    description: "Navigating the digital landscape and algorithmic status.",
    terms: [
      {
        slug: "contentmaxxing",
        title: "Contentmaxxing",
        type: "verb",
        definition: "Producing output strategically to increase visibility and consistency. Creation as a volume and cadence game.",
        usage: "He posts daily without missing because he’s contentmaxxing deliberately.",
        related: ["Algorithmmaxxing", "Distributionmaxxing", "Engagementmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "algorithmmaxxing",
        title: "Algorithmmaxxing",
        type: "verb",
        definition: "Tailoring content structure to platform mechanics. Prioritizes formatting, timing, and hooks.",
        usage: "She adjusted her thumbnails and posting times — algorithmmaxxing intentionally.",
        related: ["Contentmaxxing", "Viralmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "engagementmaxxing",
        title: "Engagementmaxxing",
        type: "verb",
        definition: "Designing content to maximize interaction metrics. Amplifies comments, shares, and reactions.",
        usage: "Ending every post with a question was clear engagementmaxxing.",
        related: ["Attentionmaxxing", "Algorithmmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "viralmaxxing",
        title: "Viralmaxxing",
        type: "verb",
        definition: "Chasing shareability over depth or nuance. Prioritizes shock, novelty, or exaggeration.",
        usage: "He leaned into controversy because he’s viralmaxxing right now.",
        related: ["Cloutmaxxing", "Engagementmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "viewmaxxing",
        title: "Viewmaxxing",
        type: "verb",
        definition: "Optimizing specifically for view count. May extend intros, increase spectacle, or emphasize hooks.",
        usage: "Stretching the opening was intentional viewmaxxing.",
        related: ["Algorithmmaxxing", "Viralmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "clipmaxxing",
        title: "Clipmaxxing",
        type: "verb",
        definition: "Structuring moments to create short-form extractable highlights. Anticipates fragmentation.",
        usage: "He paused dramatically mid-sentence — clipmaxxing instinctively.",
        related: ["Contentmaxxing", "Viralmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "platformmaxxing",
        title: "Platformmaxxing",
        type: "verb",
        definition: "Choosing environments with favorable algorithmic growth potential. Evaluates where attention is cheapest.",
        usage: "He pivoted to short-form video because he’s platformmaxxing.",
        related: ["Opportunitymaxxing", "Distributionmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "personalbrandmaxxing",
        title: "Personalbrandmaxxing",
        type: "verb",
        definition: "Aligning identity, messaging, and aesthetic into a cohesive digital persona. Treats reputation as infrastructure.",
        usage: "Every post reinforces his positioning — personalbrandmaxxing clearly.",
        related: ["Brandmaxxing", "Contentmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "followermaxxing",
        title: "Followermaxxing",
        type: "verb",
        definition: "Increasing audience size as a proxy for influence. Prioritizes reach over depth of connection.",
        usage: "He collaborated upward because he’s followermaxxing.",
        related: ["Cloutmaxxing", "Engagementmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "monetizationmaxxing",
        title: "Monetizationmaxxing",
        type: "verb",
        definition: "Converting attention into revenue streams. Integrates sponsorships, products, or services.",
        usage: "She launched a paid tier because she’s monetizationmaxxing her audience.",
        related: ["Cashflowmaxxing", "Contentmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "nichemaxxing",
        title: "Nichemaxxing",
        type: "verb",
        definition: "Concentrating on a narrow domain to dominate a specific audience. Favors authority within a segment.",
        usage: "He stopped broad topics and focused on one vertical — nichemaxxing deliberately.",
        related: ["Brandmaxxing", "ScalemaXXing"],
        sectionId: "attention"
      },
      {
        slug: "controversymaxxing",
        title: "Controversymaxxing",
        type: "verb",
        definition: "Using polarizing statements to accelerate attention growth. Leverages conflict as visibility fuel.",
        usage: "He made the statement knowing backlash would spread it — controversymaxxing intentionally.",
        related: ["Viralmaxxing", "Engagementmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "outragemaxxing",
        title: "Outragemaxxing",
        type: "verb",
        definition: "Amplifying emotional reactions to increase engagement. Converts anger into algorithmic advantage.",
        usage: "The headline was engineered for outrage — outrage-maxxing clearly.",
        related: ["Engagementmaxxing", "Viralmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "trendmaxxing",
        title: "Trendmaxxing",
        type: "verb",
        definition: "Leveraging existing momentum rather than generating it. Rides visibility waves already in motion.",
        usage: "She adapted the format immediately — trendmaxxing efficiently.",
        related: ["Algorithmmaxxing", "Platformmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "repostmaxxing",
        title: "Repostmaxxing",
        type: "verb",
        definition: "Recycling existing content strategically for extended reach. Maximizes exposure from previous effort.",
        usage: "He reshared the clip months later — repostmaxxing smartly.",
        related: ["Distributionmaxxing", "Contentmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "mememaxxing",
        title: "Mememaxxing",
        type: "verb",
        definition: "Turning identity or behavior into exaggerated repeatable themes. Simplifies complexity.",
        usage: "He leaned into the joke repeatedly — mememaxxing deliberately.",
        related: ["Viralmaxxing", "Brandmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "optics-maxxing",
        title: "Optics-maxxing",
        type: "verb",
        definition: "Prioritizing perception over substance. Manages how events appear rather than how they unfold.",
        usage: "They staged the announcement carefully — optics-maxxing strategically.",
        related: ["Image-maxxing", "Reputationmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "cancelmaxxing",
        title: "Cancelmaxxing",
        type: "verb",
        definition: "Strategically distancing from risk to avoid reputational damage. Focuses on preemptive alignment.",
        usage: "He clarified his stance quickly — cancelmaxxing defensively.",
        related: ["Reputationmaxxing", "Image-managementmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "reactmaxxing",
        title: "Reactmaxxing",
        type: "verb",
        definition: "Producing reaction-based content to capitalize on existing narratives. Reduces production effort.",
        usage: "She built her channel on commentary — reactmaxxing consistently.",
        related: ["Trendmaxxing", "Contentmaxxing"],
        sectionId: "attention"
      },
      {
        slug: "streammaxxing",
        title: "Streammaxxing",
        type: "verb",
        definition: "Maximizing live presence to compound parasocial influence. Builds loyalty through frequency.",
        usage: "He increased live hours weekly — streammaxxing aggressively.",
        related: ["Followermaxxing", "Monetizationmaxxing"],
        sectionId: "attention"
      }
    ]
  },
  {
    id: "lifestyle",
    title: "Material Signaling / Lifestyle",
    subtitle: "Section VII",
    description: "The consumption and curation of the external life.",
    terms: [
      {
        slug: "carmaxxing",
        title: "Carmaxxing",
        type: "verb",
        definition: "Using vehicle ownership to signal status, taste, or financial positioning. Transportation as visible hierarchy.",
        usage: "He upgraded earlier than necessary because he’s carmaxxing strategically.",
        related: ["Luxurymaxxing", "Statusmaxxing", "Image-maxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "luxurymaxxing",
        title: "Luxurymaxxing",
        type: "verb",
        definition: "Acquiring high-end goods to reinforce perceived value. Signals selectivity and access rather than necessity.",
        usage: "She replaced functional items with premium ones — luxurymaxxing deliberately.",
        related: ["Statusmaxxing", "Brandmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "watchmaxxing",
        title: "Watchmaxxing",
        type: "verb",
        definition: "Using timepieces as status and taste indicators. Relies on subtle signaling rather than overt display.",
        usage: "He chose a heritage model because he’s watchmaxxing with restraint.",
        related: ["Luxurymaxxing", "Aestheticmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "fashionmaxxing",
        title: "Fashionmaxxing",
        type: "verb",
        definition: "Strategically upgrading wardrobe to refine identity projection. Aligns clothing with desired hierarchy placement.",
        usage: "He simplified his wardrobe before meetings — fashionmaxxing intentionally.",
        related: ["Looksmaxxing", "Brandmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "stylemaxxing",
        title: "Stylemaxxing",
        type: "verb",
        definition: "Developing consistent aesthetic identity across environments. Emphasizes cohesion over trend-chasing.",
        usage: "Her visual consistency across platforms shows she’s stylemaxxing.",
        related: ["Aestheticmaxxing", "Image-maxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "groomingmaxxing",
        title: "Groomingmaxxing",
        type: "verb",
        definition: "Improving hygiene and presentation details to elevate perception. Sharpens edges without structural change.",
        usage: "He refined small details — groomingmaxxing subtly.",
        related: ["Looksmaxxing", "Aestheticmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "fragrancemaxxing",
        title: "Fragrancemaxxing",
        type: "verb",
        definition: "Using scent strategically to influence perception. Leverages subtle sensory signals.",
        usage: "He rotates scents seasonally — fragrancemaxxing deliberately.",
        related: ["Groomingmaxxing", "Stylemaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "lunchmaxxing",
        title: "Lunchmaxxing",
        type: "verb",
        definition: "Structuring meals to optimize performance or perception. May focus on nutrition or social signaling.",
        usage: "She brings prepared meals daily — lunchmaxxing consistently.",
        related: ["Nutritionmaxxing", "Healthmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "dietmaxxing",
        title: "Dietmaxxing",
        type: "verb",
        definition: "Adhering strictly to dietary structure for aesthetic or health gain. Emphasizes discipline and long-term consistency.",
        usage: "He avoids social indulgence because he’s dietmaxxing right now.",
        related: ["Bodyfatmaxxing", "Macromaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "travelmaxxing",
        title: "Travelmaxxing",
        type: "verb",
        definition: "Using travel strategically for exposure, network, or signaling. Amplifies narrative capital.",
        usage: "He aligned trips with opportunities — travelmaxxing deliberately.",
        related: ["Networkmaxxing", "Experiencemaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "experiencemaxxing",
        title: "Experiencemaxxing",
        type: "verb",
        definition: "Prioritizing meaningful experiences over material accumulation. Reframes value around memory.",
        usage: "She chose the trip over the purchase — experiencemaxxing clearly.",
        related: ["Lifemaxxing", "Travelmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "lifemaxxing",
        title: "Lifemaxxing",
        type: "noun, verb",
        definition: "Attempting to optimize life holistically rather than by isolated metrics. Integrates health, wealth, and relationships.",
        usage: "He stopped micromanaging details and focused on lifemaxxing overall.",
        related: ["Selfmaxxing", "Experiencemaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "selfmaxxing",
        title: "Selfmaxxing",
        type: "verb",
        definition: "Aligning behavior with personal values rather than external comparison. Shifts focus to internal congruence.",
        usage: "She stopped chasing approval and started selfmaxxing intentionally.",
        related: ["Lifemaxxing", "Mindmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "cleanlinessmaxxing",
        title: "Cleanlinessmaxxing",
        type: "verb",
        definition: "Maintaining order and hygiene to enhance clarity and perception. Reinforces discipline through environment.",
        usage: "He resets his space nightly — cleanlinessmaxxing habitually.",
        related: ["Roommaxxing", "Environmentmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "minimalismmaxxing",
        title: "Minimalismmaxxing",
        type: "verb",
        definition: "Reducing excess possessions to sharpen focus and mobility. Favors utility and simplicity.",
        usage: "She reduced everything unnecessary — minimalismmaxxing deliberately.",
        related: ["Asceticmaxxing", "Cleanlinessmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "consumptionmaxxing",
        title: "Consumptionmaxxing",
        type: "verb",
        definition: "Maximizing acquisition for signaling or comfort. Prioritizes visible abundance.",
        usage: "He upgraded everything at once — consumptionmaxxing openly.",
        related: ["Luxurymaxxing", "Statusmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "aestheticlivingmaxxing",
        title: "Aestheticlivingmaxxing",
        type: "verb",
        definition: "Designing lifestyle around visual harmony. Integrates environment and identity into daily routine.",
        usage: "Her home and wardrobe align perfectly — aestheticlivingmaxxing consistently.",
        related: ["Aestheticmaxxing", "Stylemaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "vehicleupgrademaxxing",
        title: "Vehicleupgrademaxxing",
        type: "verb",
        definition: "Using successive upgrades to maintain perceived upward momentum. Reinforces narrative of progression.",
        usage: "He replaced a functional car purely for optics — vehicleupgrademaxxing.",
        related: ["Carmaxxing", "Optics-maxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "propertymaxxing",
        title: "Propertymaxxing",
        type: "verb",
        definition: "Acquiring real estate as both asset and signal. Combines wealth building with status positioning.",
        usage: "She purchased strategically located property — propertymaxxing intentionally.",
        related: ["Assetmaxxing", "Wealthmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "homeoffice-maxxing",
        title: "Homeoffice-maxxing",
        type: "verb",
        definition: "Optimizing home workspace to signal productivity and authority. Enhances digital presence.",
        usage: "He redesigned his background before streaming — homeoffice-maxxing.",
        related: ["Setupmaxxing", "Deskmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "fitness-accessorymaxxing",
        title: "Fitness-accessorymaxxing",
        type: "verb",
        definition: "Using visible training tools or wearables to reinforce identity. Amplifies lifestyle signaling.",
        usage: "Wearing performance tracking gear daily was fitness-accessorymaxxing.",
        related: ["Gymmaxxing", "Brandmaxxing"],
        sectionId: "lifestyle"
      },
      {
        slug: "timepiecemaxxing",
        title: "Timepiecemaxxing",
        type: "verb",
        definition: "Leveraging watches or similar accessories as subtle hierarchy signals. Focuses on understated credibility.",
        usage: "He selected a classic design — timepiecemaxxing quietly.",
        related: ["Watchmaxxing", "Luxurymaxxing"],
        sectionId: "lifestyle"
      }
    ]
  },
  {
    id: "collapse",
    title: "Collapse / Excess / Meta-Layer",
    subtitle: "Section VIII",
    description: "The boundaries and failures of optimization.",
    terms: [
      {
        slug: "overmaxxing",
        title: "Overmaxxing",
        type: "verb",
        definition: "Pushing optimization beyond usefulness into diminishing returns. Occurs when marginal gains are pursued despite rising cost.",
        usage: "Stacking another routine on top of an already full schedule was clear overmaxxing.",
        related: ["Burnoutmaxxing", "Obsessionmaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "burnoutmaxxing",
        title: "Burnoutmaxxing",
        type: "verb",
        definition: "Driving oneself into exhaustion through continuous optimization pressure. Confuses intensity with progress.",
        usage: "He never slowed down and ended up burnoutmaxxing within months.",
        related: ["Overmaxxing", "Disciplinemaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "obsessionmaxxing",
        title: "Obsessionmaxxing",
        type: "verb",
        definition: "Fixating on metrics at the expense of perspective. Narrows identity into numbers and comparison.",
        usage: "Refreshing analytics hourly felt like obsessionmaxxing.",
        related: ["Validationmaxxing", "Overmaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "controlmaxxing",
        title: "Controlmaxxing",
        type: "verb",
        definition: "Attempting to eliminate uncertainty through rigid structure. Prioritizes predictability over adaptability.",
        usage: "Scheduling every minute of the day was controlmaxxing.",
        related: ["Systemmaxxing", "Disciplinemaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "nihilismmaxxing",
        title: "Nihilismmaxxing",
        type: "verb",
        definition: "Leaning into meaninglessness as a coping mechanism. Reframes effort as irrelevant when expectations collapse.",
        usage: "After repeated setbacks, he started nihilismmaxxing instead of recalibrating.",
        related: ["Antimaxxing", "Undermaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "antimaxxing",
        title: "Antimaxxing",
        type: "verb",
        definition: "Rejecting optimization as identity. Abandons metrics and performance framing entirely.",
        usage: "She stopped tracking everything and embraced antimaxxing.",
        related: ["Undermaxxing", "Lifemaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "undermaxxing",
        title: "Undermaxxing",
        type: "verb",
        definition: "Intentionally doing less than possible to avoid escalation. Resists optimization pressure through deliberate reduction.",
        usage: "He scaled back expectations — undermaxxing consciously.",
        related: ["Antimaxxing", "Minimalismmaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "metamaxxing",
        title: "Metamaxxing",
        type: "verb",
        definition: "Optimizing the framework that governs optimization. Steps above execution to refine structure and philosophy.",
        usage: "He redesigned his entire system — metamaxxing rather than tweaking.",
        related: ["Systemmaxxing", "Lifemaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "hardresetmaxxing",
        title: "Hardresetmaxxing",
        type: "verb",
        definition: "Radically restructuring life direction after plateau or collapse. Often follows burnout or perceived stagnation.",
        usage: "He changed cities and industries — hardresetmaxxing completely.",
        related: ["Rebrandmaxxing", "Lifemaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "dodgemaxxing",
        title: "Dodgemaxxing",
        type: "verb",
        definition: "Strategically avoiding low-return conflict or distraction. Preserves leverage by refusing unnecessary engagement.",
        usage: "He ignored the provocation — dodgemaxxing instead of escalating.",
        related: ["Silencemaxxing", "Boundarymaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "efficiencymaxxing",
        title: "Efficiencymaxxing",
        type: "verb",
        definition: "Reducing wasted effort to improve output ratio. Removes redundancy rather than increasing intensity.",
        usage: "She simplified the process — efficiencymaxxing deliberately.",
        related: ["Productivitymaxxing", "Systemmaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "optimizationmaxxing",
        title: "Optimizationmaxxing",
        type: "verb",
        definition: "Treating improvement itself as the primary objective. Focuses on refinement regardless of domain.",
        usage: "He adjusts constantly — optimizationmaxxing instinctively.",
        related: ["Metamaxxing", "Overmaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "pragmatismmaxxing",
        title: "Pragmatismmaxxing",
        type: "verb",
        definition: "Prioritizing practical outcome over ideological consistency. Values results above narrative.",
        usage: "She chose the effective path — pragmatismmaxxing clearly.",
        related: ["Dealmaxxing", "Leveragemaxxing"],
        sectionId: "collapse"
      },
      {
        slug: "realitymaxxing",
        title: "Realitymaxxing",
        type: "verb",
        definition: "Aligning expectation strictly with measurable truth. Reduces illusion in favor of structural clarity.",
        usage: "He assessed the numbers honestly — realitymaxxing without denial.",
        related: ["Mindmaxxing", "Securitymaxxing"],
        sectionId: "collapse"
      }
    ]
  }
];

export const INTRODUCTION = {
  title: "Introduction",
  content: [
    "Maxxing began as exaggeration.",
    "Online language compresses everything. Words shorten. Irony hardens. Jokes stabilize into frameworks.",
    "At some point, improvement stopped being abstract and became trackable.",
    "Life became adjustable. Once something becomes adjustable, it becomes optimizable. Once optimizable, it becomes comparable. Once comparable, it becomes competitive.",
    "Language followed. You don't work out — you gymmaxx. You don't increase income — you incomemaxx. You don't improve your appearance — you looksmaxx.",
    "The suffix became shorthand for a worldview: nothing is fixed.",
    "This book documents how people speak when optimization becomes reflex.",
    "Read it clinically. Read it critically. Read it carefully."
  ]
};

export const AFTER_MAXXING = {
  title: "After Maxxing",
  content: [
    "Maxxing works because it turns ambiguity into structure.",
    "Structure becomes measurement. Measurement becomes comparison. Comparison becomes hierarchy.",
    "At first, the vocabulary sharpens behavior. It clarifies intention. It accelerates progress.",
    "Over time, it can narrow perception. When everything becomes adjustable, nothing feels fixed.",
    "When everything is optimized, nothing feels sufficient.",
    "The language itself is neutral. It describes effort, ambition, insecurity, and leverage.",
    "Maxxing is not the problem. Unexamined reflex is.",
    "Notice which words feel external. Notice which feel personal.",
    "Reopen it when the language sounds different."
  ]
};
