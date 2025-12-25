import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Truck',
      title: 'Транспортировка',
      description: 'Организация доставки грузов любой сложности по всей России и за рубеж'
    },
    {
      icon: 'Warehouse',
      title: 'Складское хранение',
      description: 'Современные склады с системой контроля температуры и влажности'
    },
    {
      icon: 'Calculator',
      title: 'Анализ затрат',
      description: 'Оптимизация логистических расходов и повышение эффективности'
    },
    {
      icon: 'Package',
      title: 'Упаковка и маркировка',
      description: 'Профессиональная подготовка товара к транспортировке'
    },
    {
      icon: 'Route',
      title: 'Маршрутизация',
      description: 'Построение оптимальных маршрутов доставки с учетом всех факторов'
    },
    {
      icon: 'FileText',
      title: 'Документооборот',
      description: 'Полное сопровождение таможенной и транспортной документации'
    }
  ];

  const portfolio = [
    {
      title: 'Оптимизация цепи поставок',
      description: 'Сокращение сроков доставки на 30% для крупного ритейлера',
      result: '30% ускорение'
    },
    {
      title: 'Снижение логистических затрат',
      description: 'Анализ и реструктуризация складской сети',
      result: '25% экономия'
    },
    {
      title: 'Внедрение WMS-системы',
      description: 'Автоматизация складского учета и управления запасами',
      result: '40% эффективность'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-slide-in">
              <Icon name="PackageOpen" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold text-primary">Логистика Про</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {['home', 'about', 'services', 'portfolio', 'contacts', 'consultation'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'contacts' && 'Контакты'}
                  {section === 'consultation' && 'Консультация'}
                </button>
              ))}
            </nav>
            <Button className="hidden md:flex" onClick={() => scrollToSection('consultation')}>
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Профессиональные логистические решения
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Оптимизация цепочек поставок, складское хранение и транспортировка с 2010 года
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')}>
                Наши услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 animate-fade-in">
              О компании
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-slide-in">
                <CardContent className="pt-6">
                  <Icon name="Award" size={48} className="text-primary mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-3">Наш опыт</h3>
                  <p className="text-muted-foreground">
                    Специалист по операционной деятельности в логистике с опытом оптимизации цепочек поставок. 
                    Работаем с крупными компаниями, обеспечивая бесперебойную работу логистических процессов.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <Icon name="Target" size={48} className="text-primary mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-3">Наша миссия</h3>
                  <p className="text-muted-foreground">
                    Обеспечение информационного сопровождения логистических процессов и оптимизация операционной 
                    деятельности для повышения эффективности бизнеса наших клиентов.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 animate-fade-in">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 animate-fade-in">
            Портфолио проектов
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {project.result}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 animate-fade-in">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6 animate-slide-in">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Email</h3>
                      <a href="mailto:info@logistika-pro.ru" className="text-muted-foreground hover:text-primary transition-colors">
                        info@logistika-pro.ru
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Телефон</h3>
                      <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        Москва, ул. Логистическая, д. 10
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <Card>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4266992347586!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 animate-fade-in">
              Заявка на консультацию
            </h2>
            <p className="text-center text-white/90 mb-8 animate-fade-in">
              Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
            </p>
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Имя
                    </label>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Опишите вашу задачу..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" variant="default">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="PackageOpen" size={28} className="text-primary" />
                <span className="text-xl font-heading font-bold">Логистика Про</span>
              </div>
              <p className="text-white/70">
                Профессиональные логистические решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-white/70 hover:text-white transition-colors">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-white/70 hover:text-white transition-colors">
                    Услуги
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacts')} className="text-white/70 hover:text-white transition-colors">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@logistika-pro.ru</li>
                <li>Москва, ул. Логистическая, д. 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2024 Логистика Про. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
