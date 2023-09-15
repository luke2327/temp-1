import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

interface Props {
  isSuccess: boolean;
  isOpen: boolean;
  onOpen: any;
  onOpenChange: any;
}

export default function ModalThanks({
  isSuccess,
  isOpen,
  onOpen,
  onOpenChange,
}: Props) {
  const router = useRouter();
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {isSuccess ? (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    🎉🎉 전송 성공 🎉🎉
                  </ModalHeader>
                  <ModalBody>
                    <p>찬조 신청이 전달되었습니다.</p>
                    <p>빠른 시일내에 연락드리겠습니다.</p>
                    <p>감사합니다 🎉</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      href="/photos"
                      color="primary"
                      onPress={() => {
                        onClose();
                        router.push('/photos');
                      }}
                    >
                      닫기
                    </Button>
                  </ModalFooter>
                </>
              ) : (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    전송 실패 🥲
                  </ModalHeader>
                  <ModalBody>
                    <p>문제가 발생해 메일전송이 실패했습니다.</p>
                    <p>다시 시도해주세요.</p>
                    <p>계속 문제 발생시 연락처로 직접 연락부탁드립니다.</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                      닫기
                    </Button>
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
