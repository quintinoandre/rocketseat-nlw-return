import { CircleNotch } from 'phosphor-react';

import styles from './styles';

function Loading() {
	return (
		<div className={styles['.c-container']}>
			<CircleNotch className={styles['.c-container .c-icon']} weight="bold" />
		</div>
	);
}

export { Loading };
