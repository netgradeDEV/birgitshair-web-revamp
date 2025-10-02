import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

const HeroEditor = () => {
  const [loading, setLoading] = useState(false);
  const [heroData, setHeroData] = useState({
    id: '',
    title: '',
    subtitle: '',
    cta_primary: '',
    cta_secondary: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    const { data } = await supabase.from('hero_content').select('*').single();
    if (data) setHeroData(data);
  };

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from('hero_content')
      .update({
        title: heroData.title,
        subtitle: heroData.subtitle,
        cta_primary: heroData.cta_primary,
        cta_secondary: heroData.cta_secondary,
      })
      .eq('id', heroData.id);

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Gespeichert', description: 'Hero-Bereich wurde aktualisiert' });
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero-Bereich bearbeiten</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="title">Überschrift</Label>
          <Input
            id="title"
            value={heroData.title}
            onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="subtitle">Untertitel</Label>
          <Textarea
            id="subtitle"
            value={heroData.subtitle}
            onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="cta_primary">Primärer Button-Text</Label>
          <Input
            id="cta_primary"
            value={heroData.cta_primary}
            onChange={(e) => setHeroData({ ...heroData, cta_primary: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="cta_secondary">Sekundärer Button-Text</Label>
          <Input
            id="cta_secondary"
            value={heroData.cta_secondary}
            onChange={(e) => setHeroData({ ...heroData, cta_secondary: e.target.value })}
          />
        </div>
        <Button onClick={handleSave} disabled={loading}>
          <Save className="h-4 w-4 mr-2" />
          {loading ? 'Speichert...' : 'Speichern'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default HeroEditor;
