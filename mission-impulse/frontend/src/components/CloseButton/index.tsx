import { X } from 'phosphor-react';

import { Popover } from '@headlessui/react';

import styles from './styles';

function CloseButton() {
	return (
		<Popover.Button
			className={styles['.c-popover-button']}
			title="Close feedback form"
		>
			<X className={styles['.c-popover-button .c-icon']} weight="bold" />
		</Popover.Button>
	);
}

export { CloseButton };
