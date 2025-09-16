import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <section id="vision-mission" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the premier enabler of digital resilience and operational excellence for Indonesia’s largest corporations and strategic partners. We aspire to lead with world-class technical expertise, proven ability to execute complex, large-scale initiatives, and a commitment to transforming challenges into sustainable digital opportunities.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our mission is to deliver comprehensive, end-to-end IT solutions in cloud infrastructure, managed services, and digital transformation. Drawing from decades of experience in executing nationwide, mission-critical projects, we combine technical depth with practical execution to ensure our clients achieve measurable, scalable, and future-ready outcomes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VisionMission;
