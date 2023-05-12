import Home from './pages/Home.svelte';
import Calc from './pages/Calc.svelte';
import Chat from './pages/Chat.svelte';
import Landing from './pages/Landing.svelte';
import SignUp from './pages/SignUp.svelte';
import ToDo from './pages/ToDo.svelte';
import Weather from './pages/Weather.svelte';

export default {
    '/': Home,
    '/calc': Calc,
    '/chat': Chat,
    '/landing': Landing,
    '/signup': SignUp,
    '/todo': ToDo,
    '/weather': Weather
}
