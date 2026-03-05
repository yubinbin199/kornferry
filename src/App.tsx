import React from 'react';
import Sidebar from './components/Sidebar';
import KornFerryPage from './components/KornFerryPage';

// App 组件：应用的入口组件
// 包含左侧导航栏 (Sidebar) 和右侧主内容区域 (KornFerryPage)
function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 左侧导航栏 */}
      <Sidebar />
      
      {/* 右侧主内容区域，使用 flex-1 占据剩余空间，overflow-y-auto 允许垂直滚动 */}
      <div className="flex-1 overflow-y-auto">
        <KornFerryPage />
      </div>
    </div>
  );
}

export default App;
