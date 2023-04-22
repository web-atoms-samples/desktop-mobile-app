import "@web-atoms/data-styles/data-styles";

import styled from "@web-atoms/core/dist/style/styled";

    styled.css `
        body, html {
            
        }

        * {
            font-family: verdana;
        }

        :root {
            --accent-color: blue;
            --accent-text-color: white;
        }
    `.installGlobal();