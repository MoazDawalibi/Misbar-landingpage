import React, { useState, ReactNode, ReactElement } from 'react';
import type { DrawerProps } from 'antd';
import { Drawer, Space } from 'antd';

interface WithDrawerProps extends DrawerProps {
  button: React.ReactNode;
  children: any;
  title: string;
  className?: string;
  width?: string;
  turn_off?: boolean;
  onClick?: any;
}

const WithDrawer: React.FC<WithDrawerProps> = ({
  button,
  children,
  title = "Basic Drawer",
  className,
  width = 250,
  turn_off,
}) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        {React.cloneElement(button as React.ReactElement, {
          onClick: () => setOpen(true),
        })}
      </Space>
      <Drawer
        title={title}
        placement={placement}
        closable={false}
        onClose={closeDrawer}
        open={turn_off ? false : open}
        key={placement}
        width={width}
      >
        <div className={className}>
          {children({ closeDrawer })}
        </div>
      </Drawer>
    </>
  );
};

export default WithDrawer;
