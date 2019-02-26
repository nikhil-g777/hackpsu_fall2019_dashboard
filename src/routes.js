import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import TicketsPage from './components/tickets/TicketsPage';

export default (
    // <Route path="/" component={App}>
    //     <Route path="login" component={LoginPage} />
    //     <IndexRoute component={HomePage} />
    //     <Route path="tickets" component={TicketsPage} />
    //     <Route path="ticket" component={ManageTicketPage} />
    //     <Route path="ticket/:ticketNo" component={ManageTicketPage} />
    //     <Route path="integrations" component={IntegrationsPage} />
    //     <Route path="energyMonitoring" component={EnergyMonitoring} />
    // </Route>
    // <Route path="/" component={LoginPage}>
    <Route component={App} >
    {/* <IndexRoute component={HomePage} /> */}
        <Route path="/" component={TicketsPage} />
        <Route path="tickets" component={TicketsPage} />
    </Route>
);