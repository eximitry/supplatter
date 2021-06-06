import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../../store/actions-creators/index';

export const useActions = (): typeof ActionCreators => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
};
