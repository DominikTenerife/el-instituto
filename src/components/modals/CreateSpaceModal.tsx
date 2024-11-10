// src/components/modals/CreateSpaceModal.tsx
import { useState } from 'react';
import { Modal, Input, Button } from 'antd';

interface CreateSpaceModalProps {
  visible: boolean;
  onClose: () => void;
}

const CreateSpaceModal: React.FC<CreateSpaceModalProps> = ({ visible, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log('New Space:', { name, description });
    onClose();
  };

  return (
    <Modal
      title="Create New Space"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <div className="mb-4">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2"
        />
        <Input.TextArea
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default CreateSpaceModal;