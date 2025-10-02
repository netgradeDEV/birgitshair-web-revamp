import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Plus, Save, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface Service {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  image_url: string | null;
  order_index: number;
}

const ServicesEditor = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data } = await supabase
      .from('services')
      .select('*')
      .order('order_index');
    if (data) setServices(data);
  };

  const handleSave = async (service: Service) => {
    setLoading(true);
    const { error } = await supabase
      .from('services')
      .update({
        title: service.title,
        description: service.description,
        icon_name: service.icon_name,
        image_url: service.image_url,
      })
      .eq('id', service.id);

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Gespeichert' });
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const newService = {
      title: 'Neuer Service',
      description: 'Beschreibung',
      icon_name: 'Scissors',
      image_url: null,
      order_index: services.length,
    };
    
    const { data, error } = await supabase
      .from('services')
      .insert([newService])
      .select()
      .single();

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else if (data) {
      setServices([...services, data]);
      toast({ title: 'Hinzugefügt' });
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      setServices(services.filter((s) => s.id !== id));
      toast({ title: 'Gelöscht' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Services bearbeiten</CardTitle>
          <Button onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Hinzufügen
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {services.map((service, idx) => (
          <div key={service.id}>
            {idx > 0 && <Separator className="mb-6" />}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Service #{idx + 1}</h4>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(service.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Label>Titel</Label>
                <Input
                  value={service.title}
                  onChange={(e) => {
                    const updated = [...services];
                    updated[idx].title = e.target.value;
                    setServices(updated);
                  }}
                />
              </div>
              <div>
                <Label>Beschreibung</Label>
                <Textarea
                  value={service.description}
                  onChange={(e) => {
                    const updated = [...services];
                    updated[idx].description = e.target.value;
                    setServices(updated);
                  }}
                />
              </div>
              <div>
                <Label>Icon-Name (Lucide)</Label>
                <Input
                  value={service.icon_name}
                  onChange={(e) => {
                    const updated = [...services];
                    updated[idx].icon_name = e.target.value;
                    setServices(updated);
                  }}
                />
              </div>
              <div>
                <Label>Bild-URL (optional)</Label>
                <Input
                  value={service.image_url || ''}
                  onChange={(e) => {
                    const updated = [...services];
                    updated[idx].image_url = e.target.value;
                    setServices(updated);
                  }}
                />
              </div>
              <Button onClick={() => handleSave(service)} disabled={loading}>
                <Save className="h-4 w-4 mr-2" />
                Speichern
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ServicesEditor;
