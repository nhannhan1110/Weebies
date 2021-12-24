import React from 'react';
import { useSelector } from 'react-redux';
import CardBank from '../../../../components/CardBank';
import { ModalLMS } from '../../../../components/Modal';
import {
	indexCard,
	selectCurrentUser
} from '../../../../features/auths/slice/selector';
import { selectUserDetail } from '../../../../features/user/slice/selector';
import { useAppSelector } from '../../../../stores/hook';
interface Props {
	cancel: Function;
	open: boolean;
}

const ModalCard = (props: Props) => {
	const user = useSelector(selectCurrentUser);
	const index = useSelector(indexCard);
	return (
		<div>
			{props.open ? (
				<ModalLMS title='Card' withHeader={true} cancel={props.cancel}>
					<div className='py-12'>
						{index !== -1 && (
							<CardBank
								cardBank={user.card[index || 0]}
								userName={user.user.firstName + ' ' + user.user.lastName}
							/>
						)}
					</div>
				</ModalLMS>
			) : (
				<></>
			)}
		</div>
	);
};

export default ModalCard;