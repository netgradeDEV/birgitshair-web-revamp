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

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image_url: string | null;
  order_index: number;
}

const TeamEditor = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const { data } = await supabase
      .from('team_members')
      .select('*')
      .order('order_index');
    if (data) setMembers(data);
  };

  const handleSave = async (member: TeamMember) => {
    setLoading(true);
    const { error } = await supabase
      .from('team_members')
      .update({
        name: member.name,
        position: member.position,
        bio: member.bio,
        image_url: member.image_url,
      })
      .eq('id', member.id);

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Gespeichert' });
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    const newMember = {
      name: 'Name',
      position: 'Position',
      bio: 'Biografie',
      image_url: null,
      order_index: members.length,
    };
    
    const { data, error } = await supabase
      .from('team_members')
      .insert([newMember])
      .select()
      .single();

    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else if (data) {
      setMembers([...members, data]);
      toast({ title: 'Hinzugefügt' });
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('team_members').delete().eq('id', id);
    if (error) {
      toast({ title: 'Fehler', description: error.message, variant: 'destructive' });
    } else {
      setMembers(members.filter((m) => m.id !== id));
      toast({ title: 'Gelöscht' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Team bearbeiten</CardTitle>
          <Button onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Hinzufügen
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {members.map((member, idx) => (
          <div key={member.id}>
            {idx > 0 && <Separator className="mb-6" />}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Teammitglied #{idx + 1}</h4>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(member.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Label>Name</Label>
                <Input
                  value={member.name}
                  onChange={(e) => {
                    const updated = [...members];
                    updated[idx].name = e.target.value;
                    setMembers(updated);
                  }}
                />
              </div>
              <div>
                <Label>Position</Label>
                <Input
                  value={member.position}
                  onChange={(e) => {
                    const updated = [...members];
                    updated[idx].position = e.target.value;
                    setMembers(updated);
                  }}
                />
              </div>
              <div>
                <Label>Biografie</Label>
                <Textarea
                  value={member.bio}
                  onChange={(e) => {
                    const updated = [...members];
                    updated[idx].bio = e.target.value;
                    setMembers(updated);
                  }}
                />
              </div>
              <div>
                <Label>Bild-URL (optional)</Label>
                <Input
                  value={member.image_url || ''}
                  onChange={(e) => {
                    const updated = [...members];
                    updated[idx].image_url = e.target.value;
                    setMembers(updated);
                  }}
                />
              </div>
              <Button onClick={() => handleSave(member)} disabled={loading}>
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

export default TeamEditor;
