import { useState } from 'react';
import { UserPlus, Search, Phone, Mail, MapPin, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface LeadsManagementProps {
  posts: any[];
}

export function LeadsManagement({ posts }: LeadsManagementProps) {
  const [filterStatus, setFilterStatus] = useState('all');
  
  const [leads] = useState([
    {
      id: 1,
      name: 'Nguyễn Minh Tuấn',
      phone: '0912345678',
      email: 'minhtuan@email.com',
      location: 'Hà Nội',
      interest: 'Laptop Dell',
      type: 'Buying',
      budget: '7-10 triệu',
      status: 'new',
      priority: 'high',
      source: 'Facebook',
      lastContact: 'Chưa liên hệ',
      notes: 'Cần mua gấp trong tuần này'
    },
    {
      id: 2,
      name: 'Trần Thu Hà',
      phone: '0987654321',
      email: 'thuha@email.com',
      location: 'TP.HCM',
      interest: 'iPhone 12',
      type: 'Selling',
      budget: '12-15 triệu',
      status: 'contacted',
      priority: 'medium',
      source: 'Facebook',
      lastContact: '1 giờ trước',
      notes: 'Máy còn mới 95%, full box'
    },
    {
      id: 3,
      name: 'Lê Văn Hùng',
      phone: '0909123456',
      email: 'vanhung@email.com',
      location: 'Đà Nẵng',
      interest: 'MacBook Pro M1',
      type: 'Buying',
      budget: '20-25 triệu',
      status: 'qualified',
      priority: 'high',
      source: 'Instagram',
      lastContact: '2 ngày trước',
      notes: 'Đã xem máy, đang cân nhắc'
    },
    {
      id: 4,
      name: 'Phạm Thị Lan',
      phone: '0938765432',
      email: 'thilan@email.com',
      location: 'Hà Nội',
      interest: 'Samsung Galaxy S21',
      type: 'Buying',
      budget: '9-12 triệu',
      status: 'lost',
      priority: 'low',
      source: 'Facebook',
      lastContact: '1 tuần trước',
      notes: 'Đã mua từ nguồn khác'
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-700';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-700';
      case 'qualified':
        return 'bg-green-100 text-green-700';
      case 'lost':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new':
        return 'Mới';
      case 'contacted':
        return 'Đã liên hệ';
      case 'qualified':
        return 'Tiềm năng';
      case 'lost':
        return 'Thất bại';
      default:
        return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const filteredLeads = filterStatus === 'all' 
    ? leads 
    : leads.filter(l => l.status === filterStatus);

  return (
    <main className="flex-1 overflow-auto">
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900">Khách hàng tiềm năng</h1>
            <p className="text-gray-500">Quản lý và theo dõi khách hàng tiềm năng</p>
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Thêm khách hàng
          </Button>
        </div>
      </header>

      <div className="p-8">
        <div className="grid grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Tổng khách hàng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-gray-900">{leads.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mới</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-gray-900">
                {leads.filter(l => l.status === 'new').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tiềm năng cao</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-gray-900">
                {leads.filter(l => l.priority === 'high').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tỷ lệ chuyển đổi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-gray-900">25%</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Danh sách khách hàng tiềm năng</CardTitle>
              <div className="flex items-center gap-3">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="new">Mới</SelectItem>
                    <SelectItem value="contacted">Đã liên hệ</SelectItem>
                    <SelectItem value="qualified">Tiềm năng</SelectItem>
                    <SelectItem value="lost">Thất bại</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Tìm kiếm..." className="pl-10 w-64" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ưu tiên</TableHead>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Liên hệ</TableHead>
                  <TableHead>Quan tâm</TableHead>
                  <TableHead>Loại</TableHead>
                  <TableHead>Ngân sách</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Nguồn</TableHead>
                  <TableHead>Ghi chú</TableHead>
                  <TableHead>Hành động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <Star className={`w-5 h-5 ${getPriorityColor(lead.priority)} fill-current`} />
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-gray-900">{lead.name}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {lead.location}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-3 h-3" />
                          {lead.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="w-3 h-3" />
                          {lead.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{lead.interest}</TableCell>
                    <TableCell>
                      <Badge variant={lead.type === 'Buying' ? 'default' : 'secondary'}>
                        {lead.type === 'Buying' ? 'Mua' : 'Bán'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">{lead.budget}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(lead.status)}>
                        {getStatusLabel(lead.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">{lead.source}</TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate text-sm text-gray-600">{lead.notes}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Phone className="w-3 h-3 mr-1" />
                          Gọi
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-3 h-3 mr-1" />
                          Email
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
