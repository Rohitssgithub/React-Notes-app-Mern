import { TABS } from "../redux/actions/type";
import { useDispatch } from 'react-redux';

import { toggleTab } from "../redux/actions";


const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        <div className="text-center mb-4">{
            TABS.map(tab => (
                <button
                    className={tab === currentTab ? 'button btn btn-success' : 'button btn '}
                    onClick={() => dispatch(toggleTab(tab))}
                >
                    {tab}
                </button>
            ))}
        </div>

    )
}

export default Tabs;