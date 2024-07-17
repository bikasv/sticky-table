import 'react-modern-drawer/dist/index.css';

import { X } from 'lucide-react';
import Drawer from 'react-modern-drawer';
import styled from 'styled-components';

import CompareTable from '@/components/CompareTable/CompareTable';

const StyledDrawer = styled(Drawer)`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-sizing: border-box;
  padding: 0.75rem;
`;

const StyledDiv = styled.div`
  text-align: right;
`;

function CustomDrawer({ isOpen, onClose }: Props) {
  return (
    <StyledDrawer
      direction="bottom"
      lockBackgroundScroll
      onClose={onClose}
      open={isOpen}
      size="94vmax"
    >
      <StyledDiv onClick={onClose}><X size={36} /></StyledDiv>

      <CompareTable />
    </StyledDrawer>
  );
}

export default CustomDrawer;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
