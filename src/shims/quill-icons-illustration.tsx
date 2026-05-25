import * as React from 'react';

type IconProps = {
    height?: string | number;
    width?: string | number;
    fill?: string;
    iconSize?: string;
    title?: string;
    titleId?: string;
    [key: string]: unknown;
};

const makeIcon = (path: string) => {
    const Icon = ({ height = 64, width = 64, fill = 'currentColor', title, titleId, ...props }: IconProps) =>
        React.createElement(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 64 64',
                height,
                width,
                fill,
                role: 'img',
                'aria-labelledby': titleId,
                ...props,
            },
            title ? React.createElement('title', { id: titleId }, title) : null,
            React.createElement('path', { d: path })
        );
    return Icon;
};

export const DerivLightUserErrorIcon = makeIcon(
    'M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm0 4c13.255 0 24 10.745 24 24S45.255 56 32 56 8 45.255 8 32 18.745 8 32 8zm-1 12v16h2V20h-2zm0 20v4h2v-4h-2z'
);

export const DerivLightEmptyCardboardBoxIcon = makeIcon(
    'M8 16l8-8h32l8 8v36H8V16zm4 2v30h40V18H12zm4-2h32l-4-4H20l-4 4zm12 8v12h8V24h-8z'
);

export const DerivLightGoogleDriveIcon = makeIcon(
    'M22 4L4 36h13l18-32H22zm20 0L24 32l6.5 11L54 4H42zm4 32H18l6.5 11h27L46 36z'
);

export const DerivLightLocalDeviceIcon = makeIcon(
    'M8 8h48v36H8V8zm4 4v28h40V12H12zm4 32v4h32v-4H16zm-2 4h36v4H14v-4zm6-28h24v2H20v-2zm0 6h24v2H20v-2z'
);

export const DerivLightMyComputerIcon = makeIcon(
    'M6 8h52v36H6V8zm4 4v28h44V12H10zm6 32v4h24v-4H16zm-2 4h28v4H14v-4zm8-22h16v2H22v-2zm0 6h16v2H22v-2z'
);

export const DerivLightBotBuilderIcon = makeIcon(
    'M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm-6 16h12v8H26v-8zm-6 12h24v16H20V32zm4 4v8h16v-8H24z'
);

export const DerivLightQuickStrategyIcon = makeIcon(
    'M32 4l8 24h24l-20 14 8 24-20-14-20 14 8-24L0 28h24L32 4z'
);

export const DerivLightDeclinedPoaIcon = makeIcon(
    'M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm0 4c13.255 0 24 10.745 24 24S45.255 56 32 56 8 45.255 8 32 18.745 8 32 8zm-8 10l8 8 8-8 2.828 2.828L34.828 32l7.828 7.172L40 42l-8-8-8 8-2.828-2.828L29.172 32l-7.828-7.172L24 18z'
);
