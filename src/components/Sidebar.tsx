import { 
  Home, Users, FileText, ShoppingCart, UserCheck, MessageSquare, 
  BarChart3, Filter, Brain, Link, GraduationCap, History, Activity, LogOut 
} from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout?: () => void;
}

export function Sidebar({ currentPage, onPageChange, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Trang chủ' },
    { id: 'users', icon: Users, label: 'Người dùng' },
    { id: 'posts', icon: FileText, label: 'Bài đăng' },
    { id: 'products', icon: ShoppingCart, label: 'Sản phẩm' },
    { id: 'leads', icon: UserCheck, label: 'Khách hàng tiềm năng' },
    { id: 'conversations', icon: MessageSquare, label: 'Cuộc trò chuyện' },
    { id: 'reports', icon: BarChart3, label: 'Báo cáo' },
    { id: 'ai-settings', icon: Brain, label: 'Hệ thống AI' },
    { id: 'sources', icon: Link, label: 'Kết nối' },
    { id: 'research', icon: GraduationCap, label: 'Nghiên cứu' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-gray-900">AI Filter</div>
            <div className="text-gray-500 text-sm">Social Media Analyzer</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Processing Status */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-gray-600" />
          <span className="text-gray-900">Trạng thái xử lý</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 text-sm">Đã phân tích</span>
            </div>
            <span className="text-gray-900">1,247</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 text-sm">Đang chờ</span>
            </div>
            <span className="text-gray-900">24</span>
          </div>
        </div>

        {onLogout && (
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Đăng xuất
          </Button>
        )}
      </div>
    </aside>
  );
}