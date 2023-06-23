# Kubernetes

## Comandos usuais

- ### Instanciar um cluster local

  ```bash
  minikube start --driver=<nome-do-driver>
  ```

  >**Nota:** para padronização de um driver, digite o comando `minikube config set driver <nome-do-driver>`
  >
  >[**Lista de drivers do Kubernetes**](https://minikube.sigs.k8s.io/docs/drivers/)
  >
  > **Drivers sugeridos:** Docker e KVM2

- ### Criar um pod

  <details>
    <summary>Instruções</summary>
  <br>

  1 - Crie um arquivo exemplar chamado `pod.yaml`

  ```bash
  touch pod.yaml
  ```

  <br>
  2 - Use o editor de texto integrado ao terminal
  <br>
  <br>

  > **Sugestão:** recomendado **vim**, **neovim** ou **nano**

  <br>

  ```bash
  vim pod.yaml
  ```

  3 - Insira estas informações exemplares

  ```yaml
  # Pod Exemplar

  apiVersion: v1                   # Versão do pod
  kind: Pod                        # Tipo de recurso
  metadata:                        # Informações gerais do pod
    name: pod-exemplar             # Nome do pod
  spec:                            # Especificações do pod
    containers:                    # Informações sobre o contêiner
    - name: pod-exemplar           # Nome do contêiner
      image: nginx:latest          # Imagem do Docker
  ```

  >**Aviso:** consulte esta seção da [documentação do Kubernetes](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/#how-to-create-objects) para saber mais sobre criação de pods declarativos

  <br>
  4 - Execute a criação/atualização do pod

  ```bash
  kubectl apply -f localização/do/pod>
  ```

  > **Nota:** certifique-se de estar no mesmo diretório onde se encontra 

  </details>

- ### Editar um pod

  ```bash
  kubectl edit pod <nome-do-pod>
  ```

- ### Deletar um pod

  ```bash
  kubectl delete pod <nome-do-pod>
  ```

  > **Dica:** para deletar pods declarativos, você pode executar o comando `kubectl delete -f /arquivo/do/pod`

- ### Informações de um pod

  ```bash
  kubectl describe pod <nome-do-pod>
  ```

- ### Monitorar pods

  ```bash
  kubectl get pods
  ```

  >**Nota:** você pode monitorar em tempo real informando o parâmetro `--watch`
  >
  >**Dica:** para ver informações adicionais sobre o pod informando o parâmetr `-o wide`

- ### Consultar nodes

  ```bash
  kubectl get nodes
  ```

  >**Nota:** você pode monitorar em tempo real informando o parâmetro `--watch`

- ### Pod em modo interativo

  ```bash
  kubectl exec -it <nome-do-pod> -- bash
  ```

- ### Listar serviços do cluster

  ```bash
  kubectl get svc
  ```

- ### Criar um ConfigMap

  <details>
  <summary>Instruções</summary>
  <br>

  1 - Crie um arquivo exemplar chamado `config-map.yaml`
  
  ```bash
  touch config-map.yaml
  ```

  <br>
  2 - Use o editor de texto integrado ao terminal
  <br>
  <br>

  > **Sugestão:** recomendado **vim**, **neovim** ou **nano**

  <br>

  ```bash
  vim config-map.yaml
  ```

  3 - Insira estas informações exemplares

  ```yaml
  # ConfigMap Declarativo

  apiVersion: v1              # Versão da API
  kind: ConfigMap             # Tipo de recurso
  metadata:                   # Informações gerais de mapeamento
    name: configmap-exemplar  # Nome do mapa de configuração
  data:                       # Seção de dados de configuração
    variavel: valor           # Variável exemplar
  ```

  >**Aviso:** consulte esta seção da [documentação do Kubernetes](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/#how-to-create-objects) para saber mais sobre criação de mapas de configuração (ConfigMap)

  <br>
  4 - Execute a criação/atualização do ConfigMap

  ```bash
  kubectl apply -f /localização/do/configmap
  ```

  > **Nota:** certifique-se de estar no mesmo diretório onde o mapa de configuração se encontra 

  </details>
