import {Route, Routes, Navigate} from 'react-router-dom';
import { Budgets } from '../pages/Budgets/Budgets';
import { Favorites } from '../pages/Favorites/Favorites';
import { Home } from '../pages/Home/Home';
import { MyProposals } from '../pages/MyProposals/MyProposals';
import { Notifications } from '../pages/Notifications/Notifications';
import { Pricing } from '../pages/Pricing/Pricing';
import { Profesisonals } from '../pages/Profesisonals/Profesisonals';
import { SignIn } from '../pages/SignIn/SignIn';
import { ChooseYourAccount } from '../pages/ChooseYourAccount/ChooseYourAccount';
import { SignUpClient } from '../pages/SignUpClient/SignUpClient';
import { SignUpProfessional } from '../pages/SignUpProfessional/SignUpProfessional';
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy';
import { TermsOfUse } from '../pages/TermsOfUse/TermsOfUse';
import { ProposalPage } from '../pages/ProposalPage/ProposalPage';
import { BudgetPage } from '../pages/BudgetPage/BudgetPage';
import { Message } from '../pages/Message/Message';
import { BudgetNew } from '../pages/BudgetNew/BudgetNew';
import { Properties } from '../pages/Properties/Properties';
import { Property } from '../pages/Property/Property';
import { About } from '../pages/About/About';
import { Companies } from '../pages/Companies/Companies';
import { Brokers } from '../pages/Brokers/Brokers';
import { Company } from '../pages/Company/Company';
import { Schedules } from '../pages/Schedules/Schedules';
import { MessagesProperty } from '../pages/MessagesProperty/MessagesProperty';
import { Simulator } from '../pages/Simulator/Simulator';
import { SignInCompany } from '../pages/SignInCompany/SignInCompany';
import { Dashboard } from '../pages/Adm/Dashboard/Dashboard';
import { NewProperty } from '../pages/Adm/NewProperty/NewProperty';
import { MyAccount } from '../pages/MyAccount/MyAccount';
import { PlainsAdm } from '../pages/Adm/PlainsAdm/PlainsAdm';
import { ChatAdm } from '../pages/Adm/ChatAdm/ChatAdm';
import { NotificationsAdm } from '../pages/Adm/NotificationsAdm/NotificationsAdm';
import { SchedulesAdm } from '../pages/Adm/SchedulesAdm/SchedulesAdm';
import { BrokersAdm } from '../pages/Adm/BrokersAdm/BrokersAdm';
import { MyAccountAdm } from '../pages/Adm/MyAccountAdm/MyAccountAdm';
import { MenuAdm } from '../pages/Adm/MenuAdm/MenuAdm';
import { Scheduling } from '../pages/Scheduling/Scheduling';
import { SchedulingAdm } from '../pages/Adm/SchedulingAdm/SchedulingAdm';
import { ComingSoon } from '../pages/CommingSoom/ComingSoon';
import { Checkout } from '../pages/Checkout/Checkout';
import { PaymentCompleted } from '../pages/PaymentCompleted/PaymentCompleted';
import { Contact } from '../pages/Contact/Contact';
import { Faq } from '../pages/Faq/Faq';
import { WebApp } from '../pages/Adm/WebApp/WebApp';

function Router () {
const Local = localStorage.getItem("suachave");
const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null ? children : <Navigate to="/entrar"/>
}

    return (
            <Routes>
            {/* Rotas abertas */}
            <Route path="/" element={<ComingSoon />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/entrar" element={<SignIn />}/>
            <Route path="/entrar-empresa" element={<SignInCompany />}/>
            <Route path="/cadastrar" element={<ChooseYourAccount />}/>
            <Route path="/cadastro-profissional" element={<SignUpProfessional />}/>
            <Route path="/cadastro-cliente" element={<SignUpClient />}/>
            <Route path="/imoveis/:status" element={<Properties />}/>
            <Route path="/minhas-propostas" element={<MyProposals />}/>
            <Route path="/orcamentos" element={<Budgets />}/>
            <Route path="/profissionais" element={<Profesisonals />}/>
            <Route path="/privacidade" element={<PrivacyPolicy />}/>
            <Route path="/termos" element={<TermsOfUse />}/>
            <Route path="/proposta" element={<ProposalPage />}/>
            <Route path="/orcamento" element={<BudgetPage />}/>
            <Route path="/novo-orcamento" element={<BudgetNew />}/>
            <Route path="/imovel" element={<Property />}/>
            <Route path="/imobiliarias" element={<Companies />}/>
            <Route path="/imobiliaria" element={<Company />}/>
            <Route path="/corretores" element={<Brokers />}/>
            <Route path="/test" element={<About />}/>
            <Route path="/simulador" element={<Simulator />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/planos" element={<Pricing />}/>
            <Route path="/faleconosco" element={<Contact />}/>
            <Route path="/faq" element={<Faq />}/>
            <Route path="/conversa" element={<Message />}/>
            
            /* Rotas fechadas/login */
            <Route path="/minhaconta"
                    element={ <PrivateRoute> <MyAccount /> </PrivateRoute>} />
            <Route path="/mensagens"
                    element={ <PrivateRoute> <MessagesProperty /> </PrivateRoute>} />
            <Route path="/favoritos"
                    element={ <PrivateRoute> <Favorites /> </PrivateRoute>} />
            <Route path="/notificacoes"
                    element={ <PrivateRoute> <Notifications /> </PrivateRoute>} />
            <Route path="/agendamentos"
                    element={ <PrivateRoute> <Schedules /> </PrivateRoute>} />
            <Route path="agendamento/unico"
                    element={ <PrivateRoute> <Scheduling /> </PrivateRoute>} />
            <Route path="/painel"
                    element={ <PrivateRoute> <Dashboard /> </PrivateRoute>} />
            <Route path="/painel/novoimovel"
                    element={ <PrivateRoute> <NewProperty /> </PrivateRoute>} />
            <Route path="/plano"
                    element={ <PrivateRoute> <Checkout /> </PrivateRoute>} />
            <Route path="/painel/planos"
                    element={ <PrivateRoute> <PlainsAdm /> </PrivateRoute>} />
            <Route path="/pagamentofinalizado"
                    element={ <PrivateRoute> <PaymentCompleted /> </PrivateRoute>} />
            <Route path="/painel/chat"
                    element={ <PrivateRoute> <ChatAdm /> </PrivateRoute>} />
            <Route path="/painel/notificacoes"
                    element={ <PrivateRoute> <NotificationsAdm /> </PrivateRoute>} />
            <Route path="/painel/agendamentos"
                    element={ <PrivateRoute> <SchedulesAdm /> </PrivateRoute>} />
           <Route path="/painel/agendamento/unico"
                   element={ <PrivateRoute> <SchedulingAdm /> </PrivateRoute>} />
            <Route path="/painel/corretores"
                    element={ <PrivateRoute> <BrokersAdm /> </PrivateRoute>} />
            <Route path="/painel/minhaconta"
                    element={ <PrivateRoute> <MyAccountAdm /> </PrivateRoute>} />
            <Route path="/painel/web"
                    element={ <PrivateRoute> <WebApp /> </PrivateRoute>} />
            <Route path="/painel/menu"
                    element={ <PrivateRoute> <MenuAdm /> </PrivateRoute>} />
            </Routes>
           
    )
}

export {Router}