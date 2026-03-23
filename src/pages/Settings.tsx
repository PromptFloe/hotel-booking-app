import React from 'react';
import { Settings as SettingsIcon, User, Lock } from 'lucide-react';
import Button from '../components/ui/Button';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-textPrimary">Settings</h1>
      <div className="bg-surface1 p-6 rounded-xl shadow-md flex flex-col items-center justify-center min-h-[300px]">
        <SettingsIcon className="w-12 h-12 text-primary mb-4" />
        <div className="text-lg font-semibold text-textPrimary mb-2">No settings configured yet</div>
        <div className="text-textSecondary mb-4">You can manage your account preferences and security settings here.</div>
        <div className="flex gap-4">
          <Button variant="primary"><User className="w-4 h-4" /> Account Settings</Button>
          <Button variant="secondary"><Lock className="w-4 h-4" /> Security</Button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
