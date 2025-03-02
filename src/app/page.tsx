import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-8">
      <main className="max-w-4xl mx-auto">
        {/* 头部标题 */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">AI 配对匹配</h1>
          <p className="text-lg text-gray-600">
            使用先进的 AI 技术，帮助您找到最合适的伴侣
          </p>
        </div>

        {/* 主要功能区 */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左侧：个人信息输入 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                填写您的信息
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    年龄
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="请输入您的年龄"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    兴趣爱好
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                    placeholder="请描述您的兴趣爱好"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* 右侧：期望对象 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                理想对象
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    年龄范围
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="最小年龄"
                    />
                    <span className="text-gray-500">至</span>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="最大年龄"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    期望特质
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                    placeholder="描述您期望的伴侣特质"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* 提交按钮 */}
          <div className="mt-8 text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-semibold">
              开始匹配
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
