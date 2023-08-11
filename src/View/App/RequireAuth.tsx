
import { Location, Navigate, useLocation, useNavigate } from "react-router-dom";
import PageLoadingIndicator from "../components/LoadingIndicator/PageLoadingIndicator";
import { useEffect, useState } from "react";
import { sleep } from "../../utils/Functions";


type Props = {
  children: JSX.Element
}

export function RequireAuth({ children }: Props) {
  //const auth = useAuthStore();
  const [state, setState] = useState<'loading' | 'loaded'>('loading')
  let location = useLocation();
  let newLocation: Location = location

  if (location.pathname === '/app') {
    newLocation = { ...location, pathname: '/main_window/analysis' }
  }

  async function load() {
    sleep(300); setState('loaded')
  }

  useEffect(() => { load() }, [])
  /*
    useEffect(() => {
      if (auth.state === AuthState.LOGGED) { return }
      authService
        .getToken()
        .then((result) => auth.setUser(result))
        .catch(() => auth.setState(AuthState.NOTLOGGED))
    }, [])

    if (state === AuthState.NOTLOGGED) {
      return <Navigate to="/login" state={{ from: newLocation }} replace />;
    }
    if (state === AuthState.LOGGED && (location.pathname === '/app' || location.pathname === '/app/')) {
      console.log(newLocation.pathname);
      return <Navigate to={'/app/properties'} replace />;
    }
  */
  if (state === 'loading') {
    return <PageLoadingIndicator />
  }
  if (state === 'loaded' && (location.pathname === '/main_window' || location.pathname === '/main_window/')) {
    console.log(newLocation.pathname);
    return <Navigate to={'/main_window/analysis'} replace />;
  }
  return children;
}



