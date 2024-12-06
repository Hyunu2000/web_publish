import Event from './Event.jsx';
import Notice from './Notice.jsx';
import Package from './Package.jsx';
import Special from './Special.jsx';

export default function EventSpecial() {
    return (
        <div class="content-event-special">
            <Event />
            <Special />
            <Package />
            <Notice />
        </div>
    );
}