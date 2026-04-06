'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { services } from '../../data/mockData';
import { Switch } from '../../components/ui/switch';

export default function AdminServices() {
    const [serviceList, setServiceList] = useState(
        services.map(s => ({ ...s, active: true }))
    );

    const toggleActive = (id: string) => {
        setServiceList(prev =>
            prev.map(s => s.id === id ? { ...s, active: !s.active } : s)
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Manage Services</h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Add, edit, or remove services offered by your business
                    </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service
                </Button>
            </div>

            <div className="grid gap-6">
                {serviceList.map((service) => (
                    <Card key={service.id} className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <CardContent className="p-6">
                            <div className="flex gap-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-2">
                                                <Switch
                                                    checked={service.active}
                                                    onCheckedChange={() => toggleActive(service.id)}
                                                />
                                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                                    {service.active ? 'Active' : 'Inactive'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                                        <span className="font-semibold text-blue-600 dark:text-blue-400">{service.price}</span>
                                        <span>•</span>
                                        <span>{service.benefits.length} benefits</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400">
                                            <Edit className="w-4 h-4 mr-2" />
                                            Edit
                                        </Button>
                                        <Button size="sm" variant="outline" className="text-slate-600 border-slate-300 hover:bg-slate-50 dark:text-slate-400 dark:border-slate-700">
                                            <Eye className="w-4 h-4 mr-2" />
                                            View Details
                                        </Button>
                                        <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400">
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
