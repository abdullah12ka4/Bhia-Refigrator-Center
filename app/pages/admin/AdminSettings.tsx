'use client';

import { useState } from 'react';
import { Save, Moon, Sun } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Switch } from '../../components/ui/switch';
import { useTheme } from '../../context/ThemeContext';

export default function AdminSettings() {
  const { theme, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    businessName: 'Brother Refrigerator Center',
    email: 'info@brotherrefrigerator.com',
    phone: '+123 456 7890',
    whatsapp: '+1234567890',
    address: '123 Service Street, New York, NY 10001',
    workingHours: 'Monday - Saturday: 8:00 AM - 8:00 PM',
    emergencyService: true,
    sameDayService: true,
    warrantyPeriod: '90'
  });

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  const handleChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Settings</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Manage your business information and preferences
        </p>
      </div>

      {/* Business Information */}
      <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-white">Business Information</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Update your business details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="businessName" className="text-slate-900 dark:text-white">Business Name</Label>
            <Input
              id="businessName"
              value={settings.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-900 dark:text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-900 dark:text-white">Phone</Label>
              <Input
                id="phone"
                value={settings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-slate-900 dark:text-white">WhatsApp Number</Label>
            <Input
              id="whatsapp"
              value={settings.whatsapp}
              onChange={(e) => handleChange('whatsapp', e.target.value)}
              className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address" className="text-slate-900 dark:text-white">Address</Label>
            <Input
              id="address"
              value={settings.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="workingHours" className="text-slate-900 dark:text-white">Working Hours</Label>
            <Input
              id="workingHours"
              value={settings.workingHours}
              onChange={(e) => handleChange('workingHours', e.target.value)}
              className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
            />
          </div>
        </CardContent>
      </Card>

      {/* Service Settings */}
      <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-white">Service Settings</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Configure your service offerings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div>
              <h4 className="font-medium text-slate-900 dark:text-white mb-1">Emergency Service</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Offer 24/7 emergency repair services
              </p>
            </div>
            <Switch
              checked={settings.emergencyService}
              onCheckedChange={(value) => handleChange('emergencyService', value)}
            />
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div>
              <h4 className="font-medium text-slate-900 dark:text-white mb-1">Same-Day Service</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Provide same-day service for urgent requests
              </p>
            </div>
            <Switch
              checked={settings.sameDayService}
              onCheckedChange={(value) => handleChange('sameDayService', value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="warrantyPeriod" className="text-slate-900 dark:text-white">Warranty Period (days)</Label>
            <Input
              id="warrantyPeriod"
              type="number"
              value={settings.warrantyPeriod}
              onChange={(e) => handleChange('warrantyPeriod', e.target.value)}
              className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700"
            />
          </div>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-white">Appearance</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Customize the look and feel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div>
              <h4 className="font-medium text-slate-900 dark:text-white mb-1">Theme</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Current theme: {theme === 'light' ? 'Light' : 'Dark'}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              Toggle Theme
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
}
