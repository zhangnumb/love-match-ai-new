'use client';
import { useState } from 'react';

export default function Home() {
  const [boyName, setBoyName] = useState('');
  const [girlName, setGirlName] = useState('');

  const handleTest = () => {
    // 跳转到结果页面
    window.location.href = `/result?boy=${encodeURIComponent(boyName)}&girl=${encodeURIComponent(girlName)}`;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-pink-200 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">姻缘测试</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">男生姓名</label>
            <input
              type="text"
              value={boyName}
              onChange={(e) => setBoyName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="请输入男生姓名"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">女生姓名</label>
            <input
              type="text"
              value={girlName}
              onChange={(e) => setGirlName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="请输入女生姓名"
            />
          </div>
          <button
            onClick={handleTest}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
          >
            开始测试
          </button>
        </div>
      </div>
    </main>
  );
}
