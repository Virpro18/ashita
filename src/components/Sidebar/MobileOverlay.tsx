const MobileOverlay: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
  }) => (
    <div
      className={`fixed bg-black bg-opacity-40 z-10 w-screen h-screen transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } md:hidden top-0`}
      onClick={onClose}
    />
  );

  export default MobileOverlay