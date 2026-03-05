import React, { useState } from 'react';

// 能力详细数据
// 这里包含了四个象限（THOUGHT, RESULTS, SELF, PEOPLE）下各个层级的能力说明
// 数据结构：Quadrant -> Level -> Competencies
const data = {
  THOUGHT: [
    {
      level: "Level 3 - Making Complex Decisions",
      competencies: [
        {
          id: 32,
          name: "Balances stakeholders",
          description: "Anticipating and balancing the needs of multiples stakeholders",
          evidence: [
            "Understands internal and external stakeholder requirements, expectations, and needs",
            "Balances the interests of multiple stakeholders",
            "Considers cultural and ethical factors in the decision-making process",
            "Acts fairly despite conflicting demands of stakeholders"
          ]
        },
        {
          id: 12,
          name: "Decision quality",
          description: "Making good and timely decisions that keep the organization moving forward",
          evidence: [
            "Makes sound decisions, even in the absence of complete information",
            "Relies on a mixture of analysis, wisdom, experience, and judgment when making decisions",
            "Considers all relevant factors and uses appropriate decision-making criteria and principles",
            "Recognizes when a quick 80% solution will suffice"
          ]
        },
        {
          id: 8,
          name: "Manages complexity",
          description: "Making sense of complex, high quantity, and sometimes contradictory information to effectively solve problems",
          evidence: [
            "Asks the right questions to accurately analyze situations",
            "Acquires data from multiple and diverse sources when solving problems",
            "Uncovers root causes to difficult problems",
            "Evaluates pros and cons, risks and benefits of different solution options"
          ]
        }
      ]
    },
    {
      level: "Level 2 - Creating the New and Different",
      competencies: [
        {
          id: 18,
          name: "Global perspective",
          description: "Taking a broad view when approaching issues, using a global lens",
          evidence: [
            "Looks toward the broadest possible view of an issue or challenge",
            "Thinks and talks in global terms",
            "Understands the position of the organization within a global context",
            "Knows the impact of global trends on the organization"
          ]
        },
        {
          id: 19,
          name: "Cultivates innovation",
          description: "Creating new and better ways for the organization to be successful",
          evidence: [
            "Comes up with useful ideas that are new, better, or unique",
            "Introduces new ways of looking at problems",
            "Can take a creative idea and put it into practice",
            "Encourages diverse thinking to promote and nurture innovation"
          ]
        },
        {
          id: 33,
          name: "Strategic mindset",
          description: "Seeing ahead to future possibilities and translating them into breakthrough strategies",
          evidence: [
            "Anticipates future trends and implications accurately",
            "Readily poses future scenarios",
            "Articulates credible pictures and visions of possibilities that will create sustainable value",
            "Creates competitive and breakthrough strategies that show a clear connection between vision and action"
          ]
        }
      ]
    },
    {
      level: "Level 1 - Understanding the Business",
      competencies: [
         { id: 5, name: "Business Insight", description: "Applying knowledge of business and the marketplace to advance the organization's goals", evidence: ["Knows how businesses work and how organizations make money", "Keeps up with current and possible future policies, practices, and trends in the organization, with the competition, and in the marketplace", "Uses knowledge of business drivers and how strategies and tactics play out in the market to guide actions"] },
         { id: 11, name: "Customer Focus", description: "Building strong customer relationships and delivering customer-centric solutions", evidence: ["Gains insight into customer needs", "Identifies opportunities that benefit the customer", "Builds and delivers solutions that meet customer expectations", "Establishes and maintains effective customer relationships"] },
         { id: 15, name: "Financial Acumen", description: "Interpreting and applying understanding of key financial indicators to make better business decisions", evidence: ["Understands the meaning and implications of key financial indicators", "Uses financial analysis to generate, evaluate, and act on strategic options and opportunities", "Integrates quantitative and qualitative information to draw accurate conclusions"] },
         { id: 35, name: "Tech Savvy", description: "Anticipating and adopting innovations in business-building digital and technology applications", evidence: ["Anticipates the impact of emerging technologies and makes adjustments", "Scans the environment for new technical skills, knowledge, or capabilities that can benefit business or personal performance", "Rejects low-impact or fad technologies", "Readily learns and adopts new technologies"] }
      ]
    }
  ],
  RESULTS: [
      {
          level: "Level 3 - Taking Initiative",
          competencies: [
              { id: 1, name: "Action Oriented", description: "Taking on new opportunities and tough challenges with a sense of urgency, high energy, and enthusiasm", evidence: ["Readily takes action on challenges, without unnecessary planning", "Identifies and seizes new opportunities", "Displays a can-do attitude in good and bad times", "Steps up to handle tough issues"] },
              { id: 28, name: "Resourcefulness", description: "Securing and deploying resources effectively and efficiently", evidence: ["Marshals resources (people, funding, material, support) to get things done", "Orchestrates multiple activities simultaneously to accomplish a goal", "Gets the most out of limited resources", "Applies knowledge of internal structures, processes, and culture to resourcing efforts"] }
          ]
      },
      {
          level: "Level 2 - Managing Execution",
          competencies: [
              { id: 13, name: "Directs Work", description: "Providing direction, delegating, and removing obstacles to get work done", evidence: ["Provides clear direction and accountabilities", "Delegates and distributes assignments and decisions appropriately", "Monitors progress by maintaining dialogue on work and results", "Provides appropriate guidance and direction based on people’s capabilities"] },
              { id: 25, name: "Optimizes Work Processes", description: "Knowing the most effective and efficient processes to get things done, with a focus on continuous improvement", evidence: ["Identifies and creates the processes necessary to get work done", "Separates and combines tasks into efficient work flow", "Designs processes and procedures that allow managing from a distance", "Seeks ways to improve processes, from small tweaks to complete reengineering"] },
              { id: 27, name: "Plans and Aligns", description: "Planning and prioritizing work to meet commitments aligned with organizational goals", evidence: ["Sets objectives to align with broader organizational goals", "Breaks down objectives into appropriate initiatives and actions", "Stages activities with relevant milestones and schedules", "Anticipates and adjusts effective contingency plans"] }
          ]
      },
      {
          level: "Level 1 - Focusing on Performance",
          competencies: [
              { id: 14, name: "Ensures Accountability", description: "Holding self and others accountable to meet commitments", evidence: ["Follows through on commitments and makes sure others do the same", "Acts with a clear sense of ownership", "Takes personal responsibility for decisions, actions, and failures", "Establishes clear responsibilities and processes for monitoring work and measuring results"] },
              { id: 16, name: "Drives Results", description: "Consistently achieving results, even under tough circumstances", evidence: ["Has a strong bottom-line orientation", "Persists in accomplishing objectives despite obstacles and setbacks", "Has a track record of exceeding goals successfully", "Pushes self and helps others achieve results"] }
          ]
      }
  ],
  SELF: [
      {
          level: "Level 3 - Being Flexible and Adaptable",
          competencies: [
              { id: 22, name: "Manages Ambiguity", description: "Operating effectively, even when things are not certain or the way forward is not clear", evidence: ["Deals comfortably with the uncertainty of change", "Effectively handles risk", "Can decide and act without having the total picture", "Is calm, and productive, even when things are up in the air"] },
              { id: 26, name: "Nimble Learning", description: "Actively learning through experimentation when tackling new problems, using both successes and failures as learning fodder", evidence: ["Learns quickly when facing new situations", "Experiment with multiple ways to solve problems", "Uses failures as learning opportunities", "Extracts lessons learned from experiences"] },
              { id: 30, name: "Situational Adaptability", description: "Adapting approach and demeanor in real time to match the shifting demands of different situations", evidence: ["Picks up on situational cues and adjusts in the moment", "Understands that different situations may call for different approaches", "Can act differently depending on the circumstances", "Adapt personal, interpersonal, and leadership behavior"] },
              { id: 3, name: "Being Resilient", description: "Rebounding from setbacks and adversity when facing difficult situations", evidence: ["Is confident under pressure", "Handles and manages crises effectively", "Maintains a positive attitude despite adversity", "Bounces back from setbacks"] }
          ]
      },
      {
          level: "Level 2 - Being Open",
          competencies: [
              { id: 10, name: "Demonstrates Self-Awareness", description: "Using a combination of feedback and reflection to gain productive insight into personal strengths and weaknesses", evidence: ["Reflects on activities and impact on others", "Proactively seeks feedback without being defensive", "Is open to criticism and talking about shortcomings", "Admits mistakes and gains insight from them"] },
              { id: 29, name: "Self-Development", description: "Actively seeking new ways to grow and be challenged using both formal and informal development channels", evidence: ["Shows personal commitment and takes action to continuously improve", "Accepts assignments that broaden capabilities", "Learns from new experiences, from others, and from structured learning", "Makes the most of available development resources"] }
          ]
      },
      {
          level: "Level 1 - Being Authentic",
          competencies: [
              { id: 9, name: "Courage", description: "Stepping up to address difficult issues, saying what needs to be said", evidence: ["Readily tackles tough assignments", "Faces difficult issues and supports others who do the same", "Provides direct and actionable feedback", "Is not afraid to take negative action when necessary"] },
              { id: 20, name: "Instills Trust", description: "Gaining the confidence and trust of others through honesty, integrity, and authenticity", evidence: ["Follows through on commitments", "Is seen as direct and truthful", "Keeps confidences", "Practices what he/she preaches"] }
          ]
      }
  ],
  PEOPLE: [
      {
          level: "Level 3 - Optimizing Diverse Talent",
          competencies: [
              { id: 4, name: "Attracts Top Talent", description: "Attracting and selecting the best talent to meet current and future business needs", evidence: ["Attracts and selects diverse and high caliber talent", "Finds the right talent to meet the group’s needs", "Closes talent gaps with the right balance of internal and external candidates", "Is a good judge of talent"] },
              { id: 13, name: "Develops Talent", description: "Developing people to meet both their career goals and the organization’s goals", evidence: ["Places a high priority on developing others", "Develops others through coaching, feedback, and stretch assignments", "Aligns employee career development goals with organizational objectives", "Encourages people to accept developmental moves"] },
              { id: 36, name: "Values Differences", description: "Recognizing the value that different perspectives and cultures bring to an organization", evidence: ["Seeks out and encourages diverse thinking and perspectives", "Manages and resolves conflicts effectively", "Creates an environment where differences are valued", "Leverages the unique talents of all individuals"] },
              { id: 6, name: "Builds Effective Teams", description: "Building strong-identity teams that apply their diverse skills and perspectives to achieve common goals", evidence: ["Forms teams with appropriate and diverse mix of styles, perspectives, and experience", "Establishes common objectives and a shared mindset", "Creates a feeling of belonging and strong team morale", "Shares wins and rewards team efforts"] }
          ]
      },
      {
          level: "Level 2 - Influencing People",
          competencies: [
              { id: 7, name: "Communicates Effectively", description: "Developing and delivering multi-mode communications that convey a clear understanding of the unique needs of different audiences", evidence: ["Is effective in a variety of communication settings: one-on-one, small and large groups, or among diverse styles and position levels", "Attentively listens to others", "Adjusts to fit the audience and the message", "Provides timely and helpful information to others across the organization"] },
              { id: 17, name: "Drives Engagement", description: "Creating a climate where people are motivated to do their best to help the organization achieve its objectives", evidence: ["Creates a positive and motivating environment", "Empowers others", "Invites input and shares ownership and visibility", "Shows a clear connection between people's work and the organization's mission"] },
              { id: 24, name: "Organizational Savvy", description: "Maneuvering comfortably through complex policy, process, and people-related organizational dynamics", evidence: ["Maneuvers comfortably through complex policy, process, and people-related organizational dynamics", "Knows who the key players are", "Understands how to get things done through formal and informal channels", "Understands the origin and reasoning behind key policies, practices, and procedures"] },
              { id: 26, name: "Persuades", description: "Using compelling arguments to gain the support and commitment of others", evidence: ["Positions views and arguments appropriately to win support", "Convinces others to take action", "Negotiates skillfully in tough situations", "Wins concessions without damaging relationships"] },
              { id: 37, name: "Drives Vision and Purpose", description: "Painting a compelling picture of the vision and strategy that motivates others to action", evidence: ["Talks about future possibilities in a positive way", "Creates milestones and symbols to rally support behind the vision", "Articulates the vision in a way everyone can relate to", "Creates organization-wide energy and optimism for the future"] }
          ]
      },
      {
          level: "Level 1 - Building Collaborative Relationships",
          competencies: [
              { id: 6, name: "Collaborates", description: "Building partnerships and working collaboratively with others to meet shared objectives", evidence: ["Works cooperatively with others across the organization to achieve shared objectives", "Represents own interests while being fair to others and their areas", "Partners with others to get work done", "Credits others for their contributions and accomplishments"] },
              { id: 21, name: "Manages Conflict", description: "Handling conflict situations effectively, with a minimum of noise", evidence: ["Steps up to conflicts, seeing them as opportunities", "Readily handles tough agreements and settles disputes equitably", "Finds common ground and drives to consensus", "Orchestrates the resolution of conflict"] },
              { id: 19, name: "Interpersonal Savvy", description: "Relating openly and comfortably with diverse groups of people", evidence: ["Relates comfortably with people across levels, functions, cultures, and geography", "Acts with diplomacy and tact", "Builds rapport in an open, friendly, and accepting way", "Picks up on interpersonal and group dynamics"] },
              { id: 5, name: "Builds Networks", description: "Effectively building formal and informal relationship networks inside and outside the organization", evidence: ["Builds strong formal and informal networks", "Draws upon multiple relationships to exchange ideas, resources, and know-how", "Maintains relationships over time", "Uses networks to get things done"] }
          ]
      }
  ]
};

const CompetencyDetails = () => {
  // 使用 useState 控制当前选中的 Tab
  const [activeTab, setActiveTab] = useState('THOUGHT');

  return (
    <div className="mt-8">
      {/* Tab 切换区域 */}
      <div className="flex border-b">
        {['THOUGHT', 'RESULTS', 'SELF', 'PEOPLE'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 font-bold ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 内容展示区域 - 恢复为绿色 bg-green-50 */}
      <div className="p-6 bg-green-50">
        {/* 遍历当前 Tab 下的所有 Level */}
        {data[activeTab as keyof typeof data].map((level, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg font-bold mb-4">{level.level}</h3>
            <div className="space-y-6">
              {/* 遍历 Level 下的所有能力项 */}
              {level.competencies.map((comp) => (
                <div key={comp.id} className="bg-white p-4 rounded shadow-sm border border-green-100">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-bold text-gray-700">{comp.id}.</span>
                    <h4 className="font-bold text-lg">{comp.name}</h4>
                  </div>
                  <p className="text-gray-600 mb-3 italic">{comp.description}</p>
                  
                  <div>
                    <div className="font-bold text-sm mb-1">Evidence:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      {comp.evidence.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetencyDetails;
