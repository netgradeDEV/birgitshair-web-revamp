import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

const ContactEditor = () => {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    id: '',
    address: '',
    phone: '',
    email: '',
    opening_hours: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: '',
    },
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    const { data } = await supabase.from('contact_info').select('*').single();
    if (data) {
      setContactData({
        ...data,
        opening_hours: data.opening_hours as any,
      });
    }
  };

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from('contact_info')
      .update({
        address: contactData.address,
        phone: contactData.phone,
        email: contactData.email,
        opening_hours: contactData.opening_hours,
      })
      .eq('id', contactData.id);

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Gespeichert', description: 'Kontaktdaten wurden aktualisiert' });
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kontaktinformationen bearbeiten</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="address">Adresse</Label>
          <Input
            id="address"
            value={contactData.address}
            onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            value={contactData.phone}
            onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            type="email"
            value={contactData.email}
            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Öffnungszeiten</h4>
          {Object.entries(contactData.opening_hours).map(([day, hours]) => (
            <div key={day}>
              <Label htmlFor={day} className="capitalize">{day}</Label>
              <Input
                id={day}
                value={hours}
                onChange={(e) =>
                  setContactData({
                    ...contactData,
                    opening_hours: { ...contactData.opening_hours, [day]: e.target.value },
                  })
                }
              />
            </div>
          ))}
        </div>

        <Button onClick={handleSave} disabled={loading}>
          <Save className="h-4 w-4 mr-2" />
          {loading ? 'Speichert...' : 'Speichern'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactEditor;
