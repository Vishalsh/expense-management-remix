import { redirect } from "@remix-run/node";

export function loader({params}) {
  if(params['*'] === 'exp') {
    return redirect('/expense');
  }
  throw new Response('Not Found', { status: 404 });
}