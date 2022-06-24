import { createGlobalStyle } from 'styled-components';
import { styleConstants, colors } from './index';
import { pulse } from './animations';

export const SharedGlobalStyle = createGlobalStyle`
		html,
		body {
			width: 100%;
			height: 100%;
		}

		#main-app-container {
			height: 100%;
		}
		
		.modal-open .modal {
		  overflow-x: hidden;
		  overflow-y: auto;
		}

		label {
			cursor: inherit;
		}


		strong {
			font-weight: 500;
		}

		
		  .pulse-hover {
		      animation : ${pulse} 600ms 2;
  		  }
  
  
			::-webkit-scrollbar {
			  width: 8px;
			}

		/* Track */
		::-webkit-scrollbar-track {
		  background: transparent; 
		}
		 
		/* Handle */
		::-webkit-scrollbar-thumb {
		  background: ${colors.gray80}; 
		  border-radius: 4px;
		}
		
		/* Capitalize first letter of a string */
		.capitalize-first-letter {
			display: inline-block;
		
			&::first-letter {
				text-transform: capitalize;
			}
		
		}
	

		.text-ellipsis {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			line-height: initial;
		
			/* IE support */
			@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
				line-height: normal;
			}
		}

		/* Transformation */
		.text-lowercase {
			text-transform: lowercase;
		}

		.text-uppercase {
			text-transform: uppercase;
		}

		.text-capitalize {
			text-transform: capitalize;
		}
`;
