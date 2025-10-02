import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut } from 'lucide-react';
import HeroEditor from '@/components/admin/HeroEditor';
import ServicesEditor from '@/components/admin/ServicesEditor';
import TestimonialsEditor from '@/components/admin/TestimonialsEditor';
import TeamEditor from '@/components/admin/TeamEditor';
import GalleryEditor from '@/components/admin/GalleryEditor';
import ContactEditor from '@/components/admin/ContactEditor';
import SocialLinksEditor from '@/components/admin/SocialLinksEditor';

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Lädt...</div>;
  }

  if (!user || !isAdmin) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-serif text-2xl font-bold">Admin-Panel</h1>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Abmelden
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="gallery">Galerie</TabsTrigger>
            <TabsTrigger value="contact">Kontakt</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
          </TabsList>

          <TabsContent value="hero"><HeroEditor /></TabsContent>
          <TabsContent value="services"><ServicesEditor /></TabsContent>
          <TabsContent value="testimonials"><TestimonialsEditor /></TabsContent>
          <TabsContent value="team"><TeamEditor /></TabsContent>
          <TabsContent value="gallery"><GalleryEditor /></TabsContent>
          <TabsContent value="contact"><ContactEditor /></TabsContent>
          <TabsContent value="social"><SocialLinksEditor /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
