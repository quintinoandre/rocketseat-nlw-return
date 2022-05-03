import { ChatTeardropDots } from 'phosphor-react';

import { Popover } from '@headlessui/react';

import { WidgetForm } from '../WidgetForm';
import styles from './styles';

function Widget() {
	return (
		<Popover className={styles['.c-popover']}>
			<Popover.Panel>
				<WidgetForm />
			</Popover.Panel>
			<Popover.Button className={styles['.c-popover__button']}>
				<ChatTeardropDots className={styles['.c-popover__button .c-icon']} />
				<span className={styles['.c-popover__button__span']}>
					<span className={styles['.c-popover__button__span__span']} />
					Feedback
				</span>
			</Popover.Button>
		</Popover>
	);
}

export { Widget };
