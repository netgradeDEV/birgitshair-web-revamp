import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

const SocialLinksEditor = () => {
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    const { data } = await supabase.from('social_links').select('*');
    if (data) setLinks(data);
  };

  const handleSave = async (link: SocialLink) => {
    setLoading(true);
    const { error } = await supabase
      .from('social_links')
      .update({ url: link.url })
      .eq('id', link.id);

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Gespeichert' });
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Links bearbeiten</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {links.map((link, idx) => (
          <div key={link.id} className="space-y-2">
            <Label className="capitalize">{link.platform}</Label>
            <div className="flex gap-2">
              <Input
                value={link.url}
                onChange={(e) => {
                  const updated = [...links];
                  updated[idx].url = e.target.value;
                  setLinks(updated);
                }}
              />
              <Button onClick={() => handleSave(link)} disabled={loading}>
                <Save className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SocialLinksEditor;
