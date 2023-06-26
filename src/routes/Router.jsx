import {Route, Routes, Navigate} from 'react-router-dom';
import { Favorites } from '../pages/Favorites/Favorites';
import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { Notifications } from '../pages/Notifications/Notifications';
import { Pricing } from '../pages/Pricing/Pricing';
import { SignIn } from '../pages/SignIn/SignIn';
import { ChooseYourAccount } from '../pages/ChooseYourAccount/ChooseYourAccount';
import { SignUpClient } from '../pages/SignUpClient/SignUpClient';
import { SignUpProfessional } from '../pages/SignUpProfessional/SignUpProfessional';
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy';
import { TermsOfUse } from '../pages/TermsOfUse/TermsOfUse';
import { Message } from '../pages/Message/Message';
import { Properties } from '../pages/Properties/Properties';
import { Autos } from '../pages/Autos/Autos';
import { About } from '../pages/About/About';
import { Companies } from '../pages/Companies/Companies';
import { Brokers } from '../pages/Brokers/Brokers';
import { Schedules } from '../pages/Schedules/Schedules';
import { MessagesAutos } from '../pages/MessagesAutos/MessagesAutos';
import { Simulator } from '../pages/Simulator/Simulator';
import { SignInCompany } from '../pages/SignInCompany/SignInCompany';
import { Company } from '../pages/Company/Company';
import { MyAccount } from '../pages/MyAccount/MyAccount';
import { Scheduling } from '../pages/Scheduling/Scheduling';
import { ComingSoon } from '../pages/CommingSoom/ComingSoon';
import { Checkout } from '../pages/Checkout/Checkout';
import { PaymentCompleted } from '../pages/PaymentCompleted/PaymentCompleted';
import { Contact } from '../pages/Contact/Contact';
import { Faq } from '../pages/Faq/Faq';

function Router () {
const Local = localStorage.getItem("suachaveauto");
const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null ? children : <Navigate to="/entrar"/>
}

    return (
            <Routes>
            {/* Rotas abertas */}
            <Route path="*" element={<NotFound />}/>
            <Route path="/" element={<ComingSoon />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/entrar" element={<SignIn />}/>
            <Route path="/entrar-empresa" element={<SignInCompany />}/>
            <Route path="/cadastrar" element={<ChooseYourAccount />}/>
            <Route path="/cadastro-profissional" element={<SignUpProfessional />}/>
            <Route path="/cadastro-cliente" element={<SignUpClient />}/>
            <Route path="/carro/:status" element={<Properties />}/>
            <Route path="/moto/:status" element={<Properties />}/>
            <Route path="/caminhao/:status" element={<Properties />}/>
            <Route path="/onibus/:status" element={<Properties />}/>
            <Route path="/trator/:status" element={<Properties />}/>
            <Route path="/privacidade" element={<PrivacyPolicy />}/>
            <Route path="/termos" element={<TermsOfUse />}/>
            <Route path="/auto/:id" element={<Autos />}/>
            <Route path="/agencias" element={<Companies />}/>
            <Route path="/agencia/:nameSlug" element={<Company />}/>
            <Route path="/consultores" element={<Brokers />}/>
            <Route path="/financiamento" element={<Simulator />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/planos" element={<Pricing />}/>
            <Route path="/faleconosco" element={<Contact />}/>
            <Route path="/faq" element={<Faq />}/>
            <Route path="/conversa" element={<Message />}/>
            
            /* Rotas fechadas/login */
            <Route path="/minhaconta"
                    element={ <PrivateRoute> <MyAccount /> </PrivateRoute>} />
            <Route path="/mensagens"
                    element={ <PrivateRoute> <MessagesAutos /> </PrivateRoute>} />
            <Route path="/favoritos"
                    element={ <PrivateRoute> <Favorites /> </PrivateRoute>} />
            <Route path="/notificacoes"
                    element={ <PrivateRoute> <Notifications /> </PrivateRoute>} />
            <Route path="/agendamentos"
                    element={ <PrivateRoute> <Schedules /> </PrivateRoute>} />
            <Route path="agendamento/unico"
                    element={ <PrivateRoute> <Scheduling /> </PrivateRoute>} />
         
            <Route path="/plano"
                    element={ <PrivateRoute> <Checkout /> </PrivateRoute>} />
          
            <Route path="/pagamentofinalizado"
                    element={ <PrivateRoute> <PaymentCompleted /> </PrivateRoute>} />
           
            </Routes>
           
    )
}

export {Router}