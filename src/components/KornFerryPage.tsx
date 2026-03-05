import React from 'react';
import CompetencyTable from './CompetencyTable';
import CompetencyDetails from './CompetencyDetails';

// KornFerryPage 组件：Korn Ferry 能力框架主页面
// 包含两个主要部分：能力矩阵表格 (CompetencyTable) 和能力详细说明 (CompetencyDetails)
const KornFerryPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Korn Ferry Competency Framework</h1>
      
      {/* 能力矩阵区域 */}
      <div className="bg-white p-6 rounded shadow mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold mb-4">Competency Matrix</h2>
        
        {/* 新增的说明文本框 */}
        <div className="border border-gray-300 rounded p-4 bg-gray-50 mb-6 text-sm leading-relaxed text-gray-700">
          <p className="mb-2">
            Company’s compensation system is based on the <strong>Korn Ferry</strong> competency model. Employee compensation is determined by job level (IC Level, e.g., IC1, IC2, IC3) and Skill Score, which together define the corresponding salary range.
          </p>
          <p className="mb-2">
            In principle, promotions should follow the established level progression.
          </p>
          <p>
            Cross-level promotions (e.g., IC1 → IC3) due to business needs or outstanding performance must go through the company’s competency evaluation process and meet the requirements of the target level.
          </p>
        </div>

        <CompetencyTable />
      </div>

      {/* 能力详细说明区域 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Competency Details</h2>
        <CompetencyDetails />
      </div>
    </div>
  );
};

export default KornFerryPage;
