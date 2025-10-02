import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Plus, Save, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface GalleryImage {
  id: string;
  image_url: string;
  title: string;
  category: string;
  order_index: number;
}

const GalleryEditor = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data } = await supabase
      .from('gallery_images')
      .select('*')
      .order('order_index');
    if (data) setImages(data);
  };

  const handleSave = async (image: GalleryImage) => {
    setLoading(true);
    const { error } = await supabase
      .from('gallery_images')
      .update({
        image_url: image.image_url,
        title: image.title,
        category: image.category,
      })
      .eq('id', image.id);

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Gespeichert' });
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const newImage = {
      image_url: '',
      title: 'Neues Bild',
      category: 'Haarschnitt',
      order_index: images.length,
    };
    
    const { data, error } = await supabase
      .from('gallery_images')
      .insert([newImage])
      .select()
      .single();

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else if (data) {
      setImages([...images, data]);
      toast({ title: 'Hinzugefügt' });
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('gallery_images').delete().eq('id', id);
    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      setImages(images.filter((i) => i.id !== id));
      toast({ title: 'Gelöscht' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Galerie bearbeiten</CardTitle>
          <Button onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Hinzufügen
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {images.map((image, idx) => (
          <div key={image.id}>
            {idx > 0 && <Separator className="mb-6" />}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Bild #{idx + 1}</h4>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(image.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Label>Bild-URL</Label>
                <Input
                  value={image.image_url}
                  onChange={(e) => {
                    const updated = [...images];
                    updated[idx].image_url = e.target.value;
                    setImages(updated);
                  }}
                />
              </div>
              <div>
                <Label>Titel</Label>
                <Input
                  value={image.title}
                  onChange={(e) => {
                    const updated = [...images];
                    updated[idx].title = e.target.value;
                    setImages(updated);
                  }}
                />
              </div>
              <div>
                <Label>Kategorie</Label>
                <Input
                  value={image.category}
                  onChange={(e) => {
                    const updated = [...images];
                    updated[idx].category = e.target.value;
                    setImages(updated);
                  }}
                />
              </div>
              <Button onClick={() => handleSave(image)} disabled={loading}>
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

export default GalleryEditor;
