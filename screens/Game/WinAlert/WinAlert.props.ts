import { Dispatch, SetStateAction } from 'react';

export interface WinAlertProps {
	setIsShowAlert: Dispatch<SetStateAction<boolean | null>>;
}
