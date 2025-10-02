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

interface Testimonial {
  id: string;
  customer_name: string;
  quote: string;
  order_index: number;
}

const TestimonialsEditor = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('order_index');
    if (data) setTestimonials(data);
  };

  const handleSave = async (testimonial: Testimonial) => {
    setLoading(true);
    const { error } = await supabase
      .from('testimonials')
      .update({
        customer_name: testimonial.customer_name,
        quote: testimonial.quote,
      })
      .eq('id', testimonial.id);

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Gespeichert' });
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const newTestimonial = {
      customer_name: 'Kunde',
      quote: 'Bewertung',
      order_index: testimonials.length,
    };
    
    const { data, error } = await supabase
      .from('testimonials')
      .insert([newTestimonial])
      .select()
      .single();

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else if (data) {
      setTestimonials([...testimonials, data]);
      toast({ title: 'Hinzugefügt' });
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('testimonials').delete().eq('id', id);
    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      setTestimonials(testimonials.filter((t) => t.id !== id));
      toast({ title: 'Gelöscht' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Testimonials bearbeiten</CardTitle>
          <Button onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Hinzufügen
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {testimonials.map((testimonial, idx) => (
          <div key={testimonial.id}>
            {idx > 0 && <Separator className="mb-6" />}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Testimonial #{idx + 1}</h4>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(testimonial.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Label>Kundenname</Label>
                <Input
                  value={testimonial.customer_name}
                  onChange={(e) => {
                    const updated = [...testimonials];
                    updated[idx].customer_name = e.target.value;
                    setTestimonials(updated);
                  }}
                />
              </div>
              <div>
                <Label>Bewertungstext</Label>
                <Textarea
                  value={testimonial.quote}
                  onChange={(e) => {
                    const updated = [...testimonials];
                    updated[idx].quote = e.target.value;
                    setTestimonials(updated);
                  }}
                />
              </div>
              <Button onClick={() => handleSave(testimonial)} disabled={loading}>
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

export default TestimonialsEditor;
