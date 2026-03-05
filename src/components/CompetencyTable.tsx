import React from 'react';

// CompetencyTable Component
// Updates based on Turn 11 instructions (Revert to Green):
// 1. Revert Blue colors back to Green.
//    - lightBlue -> bg-green-100 (For THOUGHT/RESULTS/SELF/PEOPLE centers)
//    - deepBlue (Level Cells) -> bg-green-200 (For Level 1/2/3 cells)
//    - Legend Talented -> bg-green-500
//    - Not Evaluated -> bg-gray-200 (Unchanged)
// 2. Keep border structures (solid/dashed) as per Turn 8.

const CompetencyTable = () => {
  const cellBase = "h-40 flex flex-col justify-center items-center text-center p-2 text-sm border-black";
  const labelBase = "flex flex-col gap-1 justify-center p-1 text-xs";
  const notEvaluatedBg = "bg-gray-200";
  
  // Reverted Green Colors
  const lightGreen = "bg-green-100"; 
  const mediumGreen = "bg-green-200";

  const CompetencyLabel = ({ text }: { text: string }) => (
    <div className={`${notEvaluatedBg} text-black p-1 border border-gray-300 w-full`}>{text}</div>
  );

  return (
    <div className="p-4 overflow-x-auto relative">
      {/* Legend */}
      <div className="absolute top-0 right-0 flex flex-col gap-1 text-xs p-4 bg-white z-10 border shadow-sm">
         <div className="flex items-center gap-2">
            <div className={`w-8 h-4 ${notEvaluatedBg} border border-gray-400`}></div>
            <span>Not Evaluated</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-red-500 border border-gray-400"></div>
            <span>Less Skilled</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-yellow-300 border border-gray-400"></div>
            <span>Skilled</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-green-500 border border-gray-400"></div>
            <span>Talented</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-white border-2 border-red-500"></div>
            <span>Overused</span>
         </div>
      </div>

      <div className="min-w-[1000px] grid grid-cols-12 gap-0 text-xs text-center border-2 border-black">
        
        {/* --- Header Row --- */}
        <div className="col-span-2"></div>
        <div className="col-span-2 border-b-2 border-black p-2">
           <div className="flex flex-col gap-1">
             <CompetencyLabel text="Strategic Mindset" />
             <CompetencyLabel text="Cultivates Innovation" />
             <CompetencyLabel text="Global Perspective" />
           </div>
        </div>
        
        {/* Header Col 1 */}
        <div className="col-span-2 border-b-2 border-black border-l-2 border-l-black p-2">
           <div className="flex flex-col gap-1">
             <CompetencyLabel text="Resourcefulness" />
             <CompetencyLabel text="Action Oriented" />
           </div>
        </div>
        
        {/* Header Col 2 */}
        <div className="col-span-2 border-b-2 border-black border-l-2 border-l-black p-2">
           <div className="flex flex-col gap-1">
             <CompetencyLabel text="Directs Work" />
             <CompetencyLabel text="Optimizes Work Processes" />
             <CompetencyLabel text="Plans and Aligns" />
           </div>
        </div>
        
        {/* Header Col 3 */}
        <div className="col-span-2 border-b-2 border-black border-l-2 border-l-black p-2">
           {/* Empty Top Right Header */}
        </div>
        <div className="col-span-2"></div>


        {/* --- Row 0 --- */}
        <div className={`${labelBase} col-span-2 border-r-2 border-black pr-2`}>
           <CompetencyLabel text="Balances Stakeholders" />
           <CompetencyLabel text="Decision Quality" />
           <CompetencyLabel text="Manages Complexity" />
        </div>
        
        {/* Cell (0,0) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-b-2 border-black`}>
          <div className="font-bold">Level 3</div>
          <div>Marking Complex Decisions</div>
        </div>
        
        {/* Cell (0,1) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-b-2 border-black border-l-2 border-l-black`}>
          <div className="font-bold">Level 2</div>
          <div>Creating the New and Different</div>
        </div>
        
        {/* Cell (0,2) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-b-2 border-black border-l-2 border-l-black`}>
          <div className="font-bold">Level 3</div>
          <div>Taking Initiative</div>
        </div>
        
        {/* Cell (0,3) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-b-2 border-black border-l-2 border-l-black`}>
          <div className="font-bold">Level 2</div>
          <div>Managing Execution</div>
        </div>

        <div className={`${labelBase} col-span-2 border-l-2 border-black pl-2`}>
           <CompetencyLabel text="Ensures Accountability" />
           <CompetencyLabel text="Drives Results" />
        </div>


        {/* --- Row 1 --- */}
        <div className={`${labelBase} col-span-2 border-r-2 border-black pr-2`}>
           <CompetencyLabel text="Tech Savvy" />
           <CompetencyLabel text="Financial Acumen" />
           <CompetencyLabel text="Customer Focus" />
           <CompetencyLabel text="Business Insight" />
        </div>
        
        {/* Cell (1,0) -> mediumGreen (Level 1) */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-b-2 border-black border-r-2 border-r-black`}>
          <div className="font-bold">Level 1</div>
          <div>Understanding the Business</div>
        </div>
        
        {/* Cell (1,1) THOUGHT -> lightGreen */}
        <div className={`${cellBase} col-span-2 ${lightGreen} border-b-2 border-black border-dashed`}>
          <div className="font-bold text-xl">THOUGHT</div>
        </div>
        
        {/* Cell (1,2) RESULTS -> lightGreen */}
        <div className={`${cellBase} col-span-2 ${lightGreen} border-b-2 border-black border-dashed border-l-2 border-l-black border-dashed`}>
          <div className="font-bold text-xl">RESULTS</div>
        </div>
        
        {/* Cell (1,3) -> mediumGreen (Level 1) */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-b-2 border-black border-l-2 border-l-black`}>
          <div className="font-bold">Level 1</div>
          <div>Focusing on Performance</div>
        </div>

        <div className="col-span-2 border-l-2 border-black"></div>


        {/* --- Row 2 --- */}
        <div className={`${labelBase} col-span-2 border-r-2 border-black pr-2`}>
           <CompetencyLabel text="Manages Ambiguity" />
           <CompetencyLabel text="Situational Adaptability" />
           <CompetencyLabel text="Nimble Learning" />
           <CompetencyLabel text="Being Resilient" />
        </div>
        
        {/* Cell (2,0) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-b-2 border-black`}>
          <div className="font-bold">Level 3</div>
          <div>Being Flexible and Adaptable</div>
        </div>
        
        {/* Cell (2,1) SELF -> lightGreen */}
        <div className={`${cellBase} col-span-2 ${lightGreen} border-b-2 border-black border-l-2 border-l-black`}>
          <div className="font-bold text-xl">SELF</div>
        </div>
        
        {/* Cell (2,2) PEOPLE -> lightGreen */}
        <div className={`${cellBase} col-span-2 ${lightGreen} border-l-2 border-l-black border-dashed`}>
          <div className="font-bold text-xl">PEOPLE</div>
        </div>
        
        {/* Cell (2,3) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-b-2 border-black border-l-2 border-l-black`}>
          <div className="font-bold">Level 1</div>
          <div>Building Collaborative Relationships</div>
        </div>

        <div className={`${labelBase} col-span-2 border-l-2 border-black pl-2`}>
           <CompetencyLabel text="Collaborates" />
           <CompetencyLabel text="Manages Conflicts" />
           <CompetencyLabel text="Interpersonal Savvy" />
           <CompetencyLabel text="Builds Networks" />
        </div>


        {/* --- Row 3 --- */}
        <div className={`${labelBase} col-span-2 border-r-2 border-black pr-2`}>
           <CompetencyLabel text="Demonstrates Self-Awareness" />
           <CompetencyLabel text="Self-Development" />
        </div>
        
        {/* Cell (3,0) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen}`}>
          <div className="font-bold">Level 1</div>
          <div>Being Authentic</div>
        </div>
        
        {/* Cell (3,1) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-l-2 border-l-black`}>
          <div className="font-bold">Level 2</div>
          <div>Being Open</div>
        </div>
        
        {/* Cell (3,2) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-t-2 border-black border-l-2 border-l-black`}>
          <div className="font-bold">Level 2</div>
          <div>Influencing People</div>
        </div>
        
        {/* Cell (3,3) -> mediumGreen */}
        <div className={`${cellBase} col-span-2 ${mediumGreen} border-l-2 border-l-black`}>
          <div className="font-bold">Level 3</div>
          <div>Optimizing Diverse Talent</div>
        </div>

        <div className={`${labelBase} col-span-2 border-l-2 border-black pl-2`}>
           <CompetencyLabel text="Attract Top Talent" />
           <CompetencyLabel text="Develops Talent" />
           <CompetencyLabel text="Values Differences" />
           <CompetencyLabel text="Builds Effective Teams" />
        </div>


        {/* --- Footer Row --- */}
        <div className="col-span-2"></div>
        <div className="col-span-2 border-t-2 border-black p-2">
           <div className="flex flex-col gap-1">
             <CompetencyLabel text="Courage" />
             <CompetencyLabel text="Instills Trust" />
           </div>
        </div>
        <div className="col-span-2 border-t-2 border-black border-l-2 border-l-black p-2">
           {/* Empty */}
        </div>
        {/* Footer Col 2 */}
        <div className="col-span-2 border-t-2 border-black border-l-2 border-l-black p-2">
           <div className="flex flex-col gap-1">
             <CompetencyLabel text="Communicates Effectively" />
             <CompetencyLabel text="Drives Engagement" />
             <CompetencyLabel text="Organizational Savvy" />
             <CompetencyLabel text="Persuades" />
             <CompetencyLabel text="Drives Vision and Purpose" />
           </div>
        </div>
        <div className="col-span-2 border-t-2 border-black border-l-2 border-l-black p-2"></div>
        <div className="col-span-2"></div>

      </div>
    </div>
  );
};

export default CompetencyTable;
