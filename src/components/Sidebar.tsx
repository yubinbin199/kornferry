import React, { useState } from 'react';

// Sidebar 组件：用于显示左侧的导航菜单
const Sidebar = () => {
  // 使用 useState 来控制薪酬管理菜单的展开和折叠状态
  // expanded 为 true 表示展开，false 表示折叠
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-64 bg-white border-r h-screen flex flex-col">
      {/* 顶部 Logo 和系统名称区域 */}
      <div className="p-4 border-b flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">P</div>
        <span className="font-bold text-xl">P System</span>
      </div>
      
      {/* 菜单列表区域 */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 py-2 text-gray-500 text-sm">员工</div>
        
        {/* 薪酬管理菜单项，点击可以切换展开/折叠状态 */}
        <div>
          <div 
            className="px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-100 text-blue-500 font-medium"
            onClick={() => setExpanded(!expanded)}
          >
            <span>薪酬管理</span>
            <span>{expanded ? 'v' : '>'}</span>
          </div>
          
          {/* 如果 expanded 为 true，则显示子菜单 */}
          {expanded && (
            <div className="pl-4">
              <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">工资计算</div>
              <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">批量调薪</div>
              <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">技能评估</div>
              <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">工资表</div>
              {/* 当前选中的菜单项：Korn Ferry */}
              <div className="px-4 py-2 bg-blue-50 text-blue-600 border-r-2 border-blue-600 cursor-pointer">Korn Ferry</div>
            </div>
          )}
        </div>

        <div className="px-4 py-2 text-gray-500 text-sm mt-4">候选人</div>
        <div className="px-4 py-2 text-gray-500 text-sm">设置</div>
      </div>
    </div>
  );
};

export default Sidebar;
