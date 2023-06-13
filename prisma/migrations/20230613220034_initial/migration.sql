BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Pessoa] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nome] NVARCHAR(1000) NOT NULL,
    [cpf] NVARCHAR(1000) NOT NULL,
    [dataNascimento] DATETIME2 NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [unidadeId] INT NOT NULL,
    [tipoFuncaoId] INT NOT NULL,
    [cargaHoraria] INT NOT NULL,
    [situacaoPessoa] INT NOT NULL,
    CONSTRAINT [Pessoa_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
