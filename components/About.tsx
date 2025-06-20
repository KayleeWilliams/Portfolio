import { Card, CardContent, CardHeader, CardTitle } from "./base/Card";

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        I’m a passionate software engineer who loves creating web and mobile
        applications. When I’m not coding, I am usually binge-watching shows
        like Andor or Arcane, baking, or gaming. I’m always on the lookout for
        opportunities to combine my creative side with problem-solving, and
        expand my knowledge.
      </CardContent>
    </Card>
  );
}
